import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.1-beta:0',
  releaseNotes: {
    en_US: `Updated DATUM Gateway to v0.5.1beta. Removes an unnecessary multiplier that limited the maximum number of connected clients on large setups.

[Full upstream release notes](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.1beta)`,
    es_ES: `DATUM Gateway actualizado a v0.5.1beta. Elimina un multiplicador innecesario que limitaba el número máximo de clientes conectados en instalaciones grandes.

[Notas completas de la versión original](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.1beta)`,
    de_DE: `DATUM Gateway auf v0.5.1beta aktualisiert. Entfernt einen unnötigen Multiplikator, der die maximale Anzahl verbundener Clients in großen Installationen begrenzte.

[Vollständige Versionshinweise des Originalprojekts](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.1beta)`,
    pl_PL: `Zaktualizowano DATUM Gateway do v0.5.1beta. Usunięto zbędny mnożnik ograniczający maksymalną liczbę podłączonych klientów w dużych instalacjach.

[Pełne informacje o wydaniu projektu źródłowego](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.1beta)`,
    fr_FR: `DATUM Gateway mis à jour vers v0.5.1beta. Supprime un multiplicateur inutile qui limitait le nombre maximal de clients connectés dans les grandes installations.

[Notes de version complètes du projet d'origine](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.1beta)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
