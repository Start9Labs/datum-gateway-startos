import { resetPassword } from '../actions/resetPassword'
import { configJson } from '../fileModels/datum_gateway_config.json'
import { i18n } from '../i18n'
import { sdk } from '../sdk'

export const taskResetPassword = sdk.setupOnInit(async (effects) => {
  if (!(await configJson.read((c) => c.api.admin_password).const(effects))) {
    await sdk.action.createOwnTask(effects, resetPassword, 'critical', {
      reason: i18n('You must set an admin password to access your Datum UI'),
    })
  }
})
