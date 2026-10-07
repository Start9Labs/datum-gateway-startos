import { autoconfig } from 'bitcoin-core-startos/startos/actions/config/autoconfig'
import { i18n } from './i18n'
import { bitcoinDescription } from './manifest/i18n'
import { sdk } from './sdk'
import { ownUiUrl } from './utils'

const bitcoind = sdk.Dependency.required('bitcoind', {
  description: bitcoinDescription,
  metadata: {
    title: 'Bitcoin',
    icon: 'https://raw.githubusercontent.com/Start9Labs/bitcoin-core-startos/feec0b1dae42961a257948fe39b40caf8672fce1/dep-icon.svg',
  },
  versionRange: '>=28.4:14',
  kind: 'running',
  healthChecks: ['bitcoind'],
}).withInit(async (effects) => {
  // bitcoind reaches Datum's NOTIFY endpoint over the LXC bridge (replaces the
  // deprecated datum.startos DNS name). Until the bridge URL resolves there is
  // no value that could work, so defer creating the task — the reactive read
  // re-runs this hook once the host appears and creates it with the real URL.
  const notifyBase = await ownUiUrl(effects)
  if (notifyBase) {
    const blocknotify = `curl -s -m5 ${notifyBase}/NOTIFY`

    await sdk.action.createTask(effects, 'bitcoind', autoconfig, 'critical', {
      input: {
        kind: 'partial',
        accept: [{ blocknotify }],
        set: { blocknotify },
      },
      when: { condition: 'input-not-matches', once: false },
      reason: i18n('Datum requires a particular blocknotify url'),
    })
  }
})

export const dependencies = sdk.Dependencies.of().addDependency(bitcoind)
