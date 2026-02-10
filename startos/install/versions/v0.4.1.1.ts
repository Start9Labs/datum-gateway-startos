import { VersionInfo } from '@start9labs/start-sdk'
import { configJson } from '../../fileModels/datum_gateway_config.json'

export const v_0_4_1_1 = VersionInfo.of({
  version: '0.4.1:1-alpha.1',
  releaseNotes: {
    en_US: 'Update to SDK 48 and add translations',
    fr_FR: 'Ajoute les traductions and met à jour le SDK à la version 48',
  },
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
