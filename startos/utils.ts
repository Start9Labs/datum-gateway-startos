import { T } from '@start9labs/start-sdk'
import {
  rpcHostId as btcRpcHostId,
  rpcPort,
} from 'bitcoin-knots-startos/startos/utils'
import { sdk } from './sdk'

/**
 * Bridge address (`10.0.3.1:<assigned external port>`) of a dependency's
 * binding, as a minimal reactive value. Chain `.const()` in main: the mapped
 * string only changes when the address itself does, so main restarts exactly
 * on dependency install/uninstall/port-change and never on dependency
 * updates. Chain `.once()` in an action context. `fallbackPort` keeps the
 * value non-null while the dependency is absent — sanctioned only for tor's
 * allocator-guaranteed SOCKS 9050. Drop-in for the planned SDK
 * `sdk.host.getBridgeAddress` helper.
 */
export function bridgeAddress(
  effects: T.Effects,
  opts: {
    packageId: string
    hostId: string
    internalPort: number
    fallbackPort: number
  },
): { const(): Promise<string>; once(): Promise<string> }
export function bridgeAddress(
  effects: T.Effects,
  opts: { packageId: string; hostId: string; internalPort: number },
): { const(): Promise<string | null>; once(): Promise<string | null> }
export function bridgeAddress(
  effects: T.Effects,
  opts: {
    packageId: string
    hostId: string
    internalPort: number
    fallbackPort?: number
  },
) {
  const watchable = async () => {
    const osIp = await sdk.getOsIp(effects)
    return sdk.host.get(
      effects,
      { packageId: opts.packageId, hostId: opts.hostId },
      (host) => {
        const port =
          host?.bindings[opts.internalPort]?.net.assignedPort ??
          opts.fallbackPort
        return port != null ? `${osIp}:${port}` : null
      },
    )
  }
  return {
    const: async () => (await watchable()).const(),
    once: async () => (await watchable()).once(),
  }
}

export const uiPort = 7152
export const stratumPort = 23334

export const dataDir = '/data'
export const knotsMountpoint = '/mnt/knots'

// Host ids (the sdk.MultiHost.of groups) — distinct from the interface ids exported on them.
export const uiHostId = 'main'
export const stratumHostId = 'mining'
export const uiInterfaceId = 'ui'
export const stratumInterfaceId = 'stratum'

/**
 * bitcoind's RPC endpoint over the LXC bridge, as a URL. Routed through
 * `bridgeAddress`, so this `.const()` restarts main only when bitcoind's RPC
 * address actually changes — install, uninstall, or port change — never on a
 * bitcoind update. While bitcoind is absent it resolves to a loopback
 * placeholder (connection-refused, reflected by the health check) and heals
 * automatically when the binding appears.
 */
export const bitcoindRpcUrl = async (effects: T.Effects) => {
  const bridge = await bridgeAddress(effects, {
    packageId: 'bitcoind',
    hostId: btcRpcHostId,
    internalPort: rpcPort,
  }).const()
  return `http://${bridge ?? `127.0.0.1:${rpcPort}`}`
}

/**
 * Datum's own Web UI over the LXC bridge, as a URL, so bitcoind's blocknotify
 * can reach it — replacing the deprecated `http://datum.startos:7152`.
 * `undefined` until the interface is available.
 */
export const ownUiUrl = (effects: T.Effects) =>
  sdk.host
    .getOwn(effects, uiHostId, (host) => {
      const iface =
        host &&
        Object.values(host.bindings)
          .flatMap((b) => Object.values(b.interfaces))
          .find((i) => i.id === uiInterfaceId)
      return (
        iface &&
        iface.addressInfo
          .filter({
            kind: 'bridge',
            predicate: (h) => !h.ssl && h.metadata.kind === 'ipv4',
          })
          .format('urlstring')[0]
      )
    })
    .const()
