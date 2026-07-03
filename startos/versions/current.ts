import { IMPOSSIBLE, VersionInfo, YAML } from '@start9labs/start-sdk'
import { readFile, rm } from 'fs/promises'
import { configJson } from '../fileModels/datum_gateway_config.json'

export const current = VersionInfo.of({
  version: '0.4.1:10',
  releaseNotes: {
    en_US: 'Internal updates (start-sdk 2.0.x)',
    es_ES: 'Actualizaciones internas (start-sdk 2.0.x)',
    de_DE: 'Interne Aktualisierungen (start-sdk 2.0.x)',
    pl_PL: 'Aktualizacje wewnętrzne (start-sdk 2.0.x)',
    fr_FR: 'Mises à jour internes (start-sdk 2.0.x)',
  },
  migrations: {
    up: async ({ effects }) => {
      // Try to read the old 0.3.5.x config. If it exists, carry over
      // user-configurable settings to the new config format.
      const configYaml: Record<string, any> | undefined = await readFile(
        '/media/startos/volumes/main/start9/config.yaml',
        'utf-8',
      ).then(YAML.parse, () => undefined)

      if (configYaml) {
        const {
          stratum = {},
          mining = {},
          api = {},
          logger = {},
          datum = {},
        } = configYaml
        await configJson.merge(effects, {
          stratum,
          mining,
          api,
          logger,
          datum,
        })

        await rm('/media/startos/volumes/main/start9', {
          recursive: true,
        }).catch(console.error)
      }
    },
    down: IMPOSSIBLE,
  },
})
