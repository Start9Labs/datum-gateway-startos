import { IMPOSSIBLE, VersionInfo } from '@start9labs/start-sdk'
import { sdk } from '../sdk'
import { stratumHostId } from '../utils'

export const current = VersionInfo.of({
  version: '0.4.1:16',
  releaseNotes: {
    en_US: `Stops DATUM Gateway reloading at the moment your Bitcoin node goes away.

DATUM Gateway reloads when your Bitcoin node issues new RPC credentials, which it does on every restart. That reload was previously triggered as soon as the node *began* shutting down — while its RPC was already unreachable — so DATUM Gateway was stopped and restarted against a backend that was not there yet. It now reloads only once the node is back up and has published new credentials.

- Reset Password asks for confirmation before replacing the current admin password.
- The Datum action's reward-sharing choice explains each option, and several setting descriptions are clearer.
- Bitcoin is listed as a required dependency.
- Network port 23335, left reserved by the StartOS 0.3.5 version of this package, is freed.`,
    es_ES: `Evita que DATUM Gateway se recargue justo cuando tu nodo Bitcoin desaparece.

DATUM Gateway se recarga cuando tu nodo Bitcoin emite nuevas credenciales RPC, algo que hace en cada reinicio. Esa recarga se activaba en cuanto el nodo *empezaba* a apagarse — cuando su RPC ya era inalcanzable —, así que DATUM Gateway se detenía y arrancaba contra un backend que todavía no estaba. Ahora se recarga solo cuando el nodo ha vuelto y ha publicado nuevas credenciales.

- Restablecer contraseña pide confirmación antes de reemplazar la contraseña de administrador actual.
- La opción de reparto de recompensas de la acción Datum explica cada opción, y varias descripciones de ajustes son más claras.
- Bitcoin figura como dependencia obligatoria.
- Se libera el puerto de red 23335, que la versión de este paquete para StartOS 0.3.5 dejó reservado.`,
    de_DE: `Verhindert, dass DATUM Gateway genau dann neu lädt, wenn Ihr Bitcoin-Knoten verschwindet.

DATUM Gateway lädt neu, sobald Ihr Bitcoin-Knoten neue RPC-Zugangsdaten ausgibt — was bei jedem Neustart geschieht. Dieses Neuladen wurde bisher ausgelöst, sobald der Knoten mit dem Herunterfahren *begann* — während dessen RPC bereits nicht mehr erreichbar war. DATUM Gateway wurde also gestoppt und startete gegen ein Backend, das noch nicht da war. Es lädt jetzt erst neu, wenn der Knoten wieder läuft und neue Zugangsdaten veröffentlicht hat.

- „Passwort zurücksetzen“ fragt nach einer Bestätigung, bevor das aktuelle Admin-Passwort ersetzt wird.
- Die Belohnungsteilung in der Aktion „Datum“ erklärt jede Option, und mehrere Einstellungsbeschreibungen sind klarer.
- Bitcoin wird als erforderliche Abhängigkeit aufgeführt.
- Der Netzwerkport 23335, den die StartOS-0.3.5-Version dieses Pakets belegt gelassen hatte, wird freigegeben.`,
    pl_PL: `Zapobiega przeładowaniu DATUM Gateway dokładnie w chwili, gdy znika Twój węzeł Bitcoin.

DATUM Gateway przeładowuje się, gdy Twój węzeł Bitcoin wydaje nowe dane uwierzytelniające RPC, co robi przy każdym restarcie. Dotąd to przeładowanie uruchamiało się, gdy tylko węzeł *zaczynał* się wyłączać — a jego RPC było już nieosiągalne — więc DATUM Gateway było zatrzymywane i startowało wobec backendu, którego jeszcze nie było. Teraz przeładowuje się dopiero wtedy, gdy węzeł wróci i opublikuje nowe dane uwierzytelniające.

- „Zresetuj hasło” prosi o potwierdzenie przed zastąpieniem bieżącego hasła administratora.
- Wybór podziału nagród w akcji Datum objaśnia każdą opcję, a kilka opisów ustawień jest jaśniejszych.
- Bitcoin jest wymieniony jako wymagana zależność.
- Port sieciowy 23335, który wersja tego pakietu dla StartOS 0.3.5 pozostawiła zajęty, zostaje zwolniony.`,
    fr_FR: `Empêche DATUM Gateway de se recharger au moment précis où votre nœud Bitcoin disparaît.

DATUM Gateway se recharge lorsque votre nœud Bitcoin émet de nouveaux identifiants RPC, ce qu'il fait à chaque redémarrage. Ce rechargement était jusqu'ici déclenché dès que le nœud *commençait* à s'arrêter — alors que son RPC était déjà injoignable —, si bien que DATUM Gateway était arrêté puis redémarré face à un backend encore absent. Il ne se recharge désormais qu'une fois le nœud revenu et de nouveaux identifiants publiés.

- Réinitialiser le mot de passe demande une confirmation avant de remplacer le mot de passe administrateur actuel.
- Le choix du partage des récompenses de l'action Datum explique chaque option, et plusieurs descriptions de réglages sont plus claires.
- Bitcoin est indiqué comme dépendance requise.
- Le port réseau 23335, que la version de ce paquet pour StartOS 0.3.5 avait laissé réservé, est libéré.`,
  },
  migrations: {
    up: async ({ effects }) => {
      await sdk.MultiHost.of(effects, stratumHostId).retirePort(23335)
    },
    down: IMPOSSIBLE,
  },
})
