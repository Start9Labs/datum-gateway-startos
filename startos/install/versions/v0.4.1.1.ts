import { VersionInfo } from '@start9labs/start-sdk'
import { configJson } from '../../fileModels/datum_gateway_config.json'

export const v_0_4_1_1 = VersionInfo.of({
  version: '0.4.1:1-alpha.0',
  releaseNotes: 'Update to datum gateway v0.4.1beta',
  migrations: {
    up: async ({ effects }) => {
      await configJson.merge(effects, {
        api: {
          allow_insecure_auth: false,
        },
      })
    },
    down: async () => {},
  }
})
