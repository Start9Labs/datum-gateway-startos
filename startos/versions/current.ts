import { IMPOSSIBLE, VersionInfo, YAML } from '@start9labs/start-sdk'
import { readFile, rm } from 'fs/promises'
import { configJson } from '../fileModels/datum_gateway_config.json'

export const current = VersionInfo.of({
  version: '0.4.1:9',
  releaseNotes: {
    en_US: 'Bumps start-sdk to 1.5.2.',
    es_ES: 'Actualiza start-sdk a 1.5.2.',
    de_DE: 'Aktualisiert start-sdk auf 1.5.2.',
    pl_PL: 'Aktualizuje start-sdk do 1.5.2.',
    fr_FR: 'Met à jour start-sdk vers 1.5.2.',
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
