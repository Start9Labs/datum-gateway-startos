import { IMPOSSIBLE, VersionInfo, YAML } from '@start9labs/start-sdk'
import { readFile, rm } from 'fs/promises'
import { configJson } from '../fileModels/datum_gateway_config.json'

export const v_0_4_1_7 = VersionInfo.of({
  version: '0.4.1:7',
  releaseNotes: {
    en_US: 'Fix reward sharing logic, add a new hashrate widget, use percentages for usernames modifiers.',
    es_ES: 'Corregir lógica de distribución de recompensas, agregar un nuevo widget de hashrate, usar porcentajes para modificadores de nombres de usuario.',
    de_DE: 'Fehlerhafte Reward-Sharing-Logik reparieren, neues Hashrate-Widget hinzufügen, Prozentsätze für Benutzernamen-Modifizierer verwenden.',
    pl_PL: 'Napraw logikę dzielenia nagród, dodaj nowy widget hashrate, użyj procentów dla modyfikatorów nazw użytkowników.',
    fr_FR: 'Corrige la logique de partage des récompenses, ajoute un nouveau widget de taux de hachage, utilise des pourcentages pour les modificateurs de noms d\'utilisateur.',
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
