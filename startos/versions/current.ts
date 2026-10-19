import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'

export const current = VersionInfo.of({
  version: '0.5.0-beta:0',
  releaseNotes: {
    en_US: `Updated DATUM Gateway to v0.5.0beta. Adds a JSON API and dashboard version display, hardens authentication and protocol parsing, and fixes duplicate-share tracking and submission queues across pool reconnects. The API action can enable or disable the JSON API; most statistics endpoints do not require authentication. The task on Bitcoin's page now also reserves room in each block for DATUM's coinbase. Bitcoin must be at least 29.4:23, 30.3:23 or 31.1:25, depending on its major version, or Bitcoin Knots (pre-RDTS) 29.3:31; Bitcoin 28 is no longer supported. Updated start-sdk to 3.1.0.

[Full upstream release notes](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
    es_ES: `DATUM Gateway actualizado a v0.5.0beta. Añade una API JSON y muestra la versión en el panel, refuerza la autenticación y el análisis del protocolo, y corrige el seguimiento de participaciones duplicadas y las colas de envío al reconectar con el pool. La acción API permite activar o desactivar la API JSON; la mayoría de los endpoints de estadísticas no requieren autenticación. La tarea en la página de Bitcoin ahora también reserva espacio en cada bloque para la coinbase de DATUM. Bitcoin debe ser al menos la versión 29.4:23, 30.3:23 o 31.1:25, según su versión principal, o Bitcoin Knots (pre-RDTS) 29.3:31; Bitcoin 28 ya no es compatible. start-sdk actualizado a 3.1.0.

[Notas completas de la versión original](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
    de_DE: `DATUM Gateway auf v0.5.0beta aktualisiert. Fügt eine JSON-API und die Versionsanzeige im Dashboard hinzu, verbessert die Authentifizierung und Protokollverarbeitung und behebt die Erkennung doppelter Shares sowie die Übermittlungswarteschlangen bei erneuten Pool-Verbindungen. Die Aktion API kann die JSON-API aktivieren oder deaktivieren; die meisten Statistik-Endpunkte erfordern keine Authentifizierung. Die Aufgabe auf der Bitcoin-Seite reserviert jetzt zusätzlich Platz in jedem Block für die Coinbase von DATUM. Bitcoin muss je nach Hauptversion mindestens 29.4:23, 30.3:23 oder 31.1:25 sein, oder Bitcoin Knots (pre-RDTS) 29.3:31; Bitcoin 28 wird nicht mehr unterstützt. start-sdk auf 3.1.0 aktualisiert.

[Vollständige Versionshinweise des Originalprojekts](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
    pl_PL: `Zaktualizowano DATUM Gateway do v0.5.0beta. Dodano API JSON i wyświetlanie wersji w panelu, wzmocniono uwierzytelnianie i analizę protokołu oraz poprawiono śledzenie zduplikowanych udziałów i kolejki wysyłania przy ponownym łączeniu z pulą. Akcja API pozwala włączać i wyłączać API JSON; większość endpointów statystycznych nie wymaga uwierzytelniania. Zadanie na stronie Bitcoin rezerwuje teraz także miejsce w każdym bloku na transakcję coinbase DATUM. Bitcoin musi być co najmniej w wersji 29.4:23, 30.3:23 lub 31.1:25, zależnie od wersji głównej, albo Bitcoin Knots (pre-RDTS) 29.3:31; Bitcoin 28 nie jest już obsługiwany. Zaktualizowano start-sdk do 3.1.0.

[Pełne informacje o wydaniu projektu źródłowego](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
    fr_FR: `DATUM Gateway mis à jour vers v0.5.0beta. Ajoute une API JSON et l'affichage de la version dans le tableau de bord, renforce l'authentification et l'analyse du protocole, et corrige le suivi des parts dupliquées et les files d'envoi lors des reconnexions au pool. L'action API permet d'activer ou de désactiver l'API JSON ; la plupart des points d'accès statistiques ne nécessitent pas d'authentification. La tâche sur la page de Bitcoin réserve désormais aussi de la place dans chaque bloc pour la coinbase de DATUM. Bitcoin doit être au moins en version 29.4:23, 30.3:23 ou 31.1:25, selon sa version majeure, ou Bitcoin Knots (pre-RDTS) 29.3:31 ; Bitcoin 28 n'est plus pris en charge. start-sdk mis à jour vers 3.1.0.

[Notes de version complètes du projet d'origine](https://github.com/OCEAN-xyz/datum_gateway/releases/tag/v0.5.0beta)`,
  },
  migrations: {
    up: async () => {},
    down: IMPOSSIBLE,
  },
})
