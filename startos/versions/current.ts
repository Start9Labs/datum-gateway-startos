import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.0-beta:0',
  releaseNotes: {
    en_US: `Updated DATUM Gateway to v0.5.0beta. Adds a JSON API and dashboard version display, hardens authentication and protocol parsing, and fixes duplicate-share tracking and submission queues across pool reconnects. The API action can enable or disable the JSON API; most statistics endpoints do not require authentication. Updated start-sdk to 3.0.6.

[Full upstream release notes](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
    es_ES: `DATUM Gateway actualizado a v0.5.0beta. Añade una API JSON y muestra la versión en el panel, refuerza la autenticación y el análisis del protocolo, y corrige el seguimiento de participaciones duplicadas y las colas de envío al reconectar con el pool. La acción API permite activar o desactivar la API JSON; la mayoría de los endpoints de estadísticas no requieren autenticación. start-sdk actualizado a 3.0.6.

[Notas completas de la versión original](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
    de_DE: `DATUM Gateway auf v0.5.0beta aktualisiert. Fügt eine JSON-API und die Versionsanzeige im Dashboard hinzu, verbessert die Authentifizierung und Protokollverarbeitung und behebt die Erkennung doppelter Shares sowie die Übermittlungswarteschlangen bei erneuten Pool-Verbindungen. Die Aktion API kann die JSON-API aktivieren oder deaktivieren; die meisten Statistik-Endpunkte erfordern keine Authentifizierung. start-sdk auf 3.0.6 aktualisiert.

[Vollständige Versionshinweise des Originalprojekts](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
    pl_PL: `Zaktualizowano DATUM Gateway do v0.5.0beta. Dodano API JSON i wyświetlanie wersji w panelu, wzmocniono uwierzytelnianie i analizę protokołu oraz poprawiono śledzenie zduplikowanych udziałów i kolejki wysyłania przy ponownym łączeniu z pulą. Akcja API pozwala włączać i wyłączać API JSON; większość endpointów statystycznych nie wymaga uwierzytelniania. Zaktualizowano start-sdk do 3.0.6.

[Pełne informacje o wydaniu projektu źródłowego](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
    fr_FR: `DATUM Gateway mis à jour vers v0.5.0beta. Ajoute une API JSON et l'affichage de la version dans le tableau de bord, renforce l'authentification et l'analyse du protocole, et corrige le suivi des parts dupliquées et les files d'envoi lors des reconnexions au pool. L'action API permet d'activer ou de désactiver l'API JSON ; la plupart des points d'accès statistiques ne nécessitent pas d'authentification. start-sdk mis à jour vers 3.0.6.

[Notes de version complètes du projet d'origine](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
