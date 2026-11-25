import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.1-beta:3',
  releaseNotes: {
    en_US:
      'Removed the Trust PROXY option from Stratum Server Settings, which has no use on StartOS. Installs that had it set are returned to the default.',
    es_ES:
      'Se eliminó la opción Trust PROXY de Stratum Server Settings, que no tiene uso en StartOS. Las instalaciones que la tenían configurada vuelven al valor predeterminado.',
    de_DE:
      'Die Option Trust PROXY wurde aus Stratum Server Settings entfernt, da sie unter StartOS keinen Nutzen hat. Installationen, die sie gesetzt hatten, werden auf den Standardwert zurückgesetzt.',
    pl_PL:
      'Usunięto opcję Trust PROXY z Stratum Server Settings, która nie ma zastosowania w StartOS. Instalacje, w których była ustawiona, wracają do wartości domyślnej.',
    fr_FR:
      "Suppression de l'option Faire confiance à PROXY des Réglages du serveur Stratum, sans utilité sur StartOS. Les installations qui l'avaient définie reviennent à la valeur par défaut.",
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
