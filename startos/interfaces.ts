import { i18n } from './i18n'
import { sdk } from './sdk'
import {
  stratumHostId,
  stratumInterfaceId,
  stratumPort,
  uiHostId,
  uiInterfaceId,
  uiPort,
} from './utils'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  // UI
  const uiMulti = sdk.MultiHost.of(effects, uiHostId)
  const uiMultiOrigin = await uiMulti.bindPort(uiPort, {
    protocol: 'http',
  })
  const ui = sdk.createInterface(effects, {
    name: i18n('Web UI'),
    id: uiInterfaceId,
    description: i18n('The web interface of Datum Gateway'),
    type: 'ui',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })
  const uiReceipt = await uiMultiOrigin.export([ui])

  // Stratum
  const stratumMulti = sdk.MultiHost.of(effects, stratumHostId)
  const stratumMultiOrigin = await stratumMulti.bindPort(stratumPort, {
    protocol: null,
    addSsl: null,
    preferredExternalPort: stratumPort,
    secure: { ssl: false },
  })
  const stratum = sdk.createInterface(effects, {
    name: i18n('Stratum Server'),
    id: stratumInterfaceId,
    description: i18n('Point your ASICs here!'),
    type: 'api',
    masked: false,
    schemeOverride: null,
    username: null,
    path: '',
    query: {},
  })
  const stratumReceipt = await stratumMultiOrigin.export([stratum])

  return [uiReceipt, stratumReceipt]
})
