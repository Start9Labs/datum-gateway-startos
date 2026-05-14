import { IMPOSSIBLE, VersionInfo, YAML } from '@start9labs/start-sdk'
import { readFile, rm } from 'fs/promises'
import { configJson } from '../fileModels/datum_gateway_config.json'

export const v_0_4_1_8 = VersionInfo.of({
  version: '0.4.1:8',
  releaseNotes: {
    en_US: `**Features**

- Fix reward sharing logic, add a new hashrate widget, use percentages for username modifiers.

**Internal**

- Bump start-sdk to 1.5.0.`,
    es_ES: `**Funcionalidades**

- Corregir lógica de distribución de recompensas, agregar un nuevo widget de hashrate, usar porcentajes para modificadores de nombres de usuario.

**Interno**

- Actualizar start-sdk a 1.5.0.`,
    de_DE: `**Funktionen**

- Fehlerhafte Reward-Sharing-Logik reparieren, neues Hashrate-Widget hinzufügen, Prozentsätze für Benutzernamen-Modifizierer verwenden.

**Intern**

- start-sdk auf 1.5.0 aktualisiert.`,
    pl_PL: `**Funkcje**

- Napraw logikę dzielenia nagród, dodaj nowy widget hashrate, użyj procentów dla modyfikatorów nazw użytkowników.

**Wewnętrzne**

- Aktualizacja start-sdk do 1.5.0.`,
    fr_FR: `**Fonctionnalités**

- Corrige la logique de partage des récompenses, ajoute un nouveau widget de taux de hachage, utilise des pourcentages pour les modificateurs de noms d'utilisateur.

**Interne**

- Mise à jour de start-sdk vers 1.5.0.`,
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
