import { T } from '@start9labs/start-sdk'
import {
  rpcHostId as btcRpcHostId,
  rpcInterfaceId as btcRpcInterfaceId,
} from 'bitcoin-knots-startos/startos/utils'
import { sdk } from './sdk'

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
 * bitcoind's RPC endpoint over the LXC bridge, as a URL, replacing the
 * deprecated `http://bitcoind.startos:8332`. `undefined` until bitcoind's
 * interface is available.
 */
export const bitcoindRpcUrl = (effects: T.Effects) =>
  sdk.host
    .get(effects, { hostId: btcRpcHostId, packageId: 'bitcoind' }, (host) => {
      const iface =
        host &&
        Object.values(host.bindings)
          .flatMap((b) => Object.values(b.interfaces))
          .find((i) => i.id === btcRpcInterfaceId)
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
