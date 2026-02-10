import { utils } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
import { randomPassword } from '../utils'
import {
  configJson,
  ensureConfigFile,
} from '../fileModels/datum_gateway_config.json'
import { i18n } from '../i18n'

export const resetPassword = sdk.Action.withoutInput(
  // id
  'reset-password',

  // metadata
  async ({ effects }) => {
    const hasPass = !!(await configJson
      .read((c) => c.api.admin_password)
      .const(effects))

    return {
      name: hasPass ? i18n('Reset Password') : i18n('Create Password'),
      description: hasPass ? i18n('Reset your admin password') : i18n('Create your admin password'),
      warning: null,
      allowedStatuses: 'any',
      group: 'Config',
      visibility: 'enabled',
    }
  },

  // the execution function
  async ({ effects }) => {
    await ensureConfigFile(effects)

    const admin_password = utils.getDefaultString(randomPassword)

    await configJson.merge(effects, { api: { admin_password } })

    return {
      version: '1',
      title: i18n('Success'),
      message: i18n('Your new password is below'),
      result: {
        type: 'single',
        value: admin_password,
        masked: true,
        copyable: true,
        qr: false,
      },
    }
  },
)
