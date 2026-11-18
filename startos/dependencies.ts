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
  versionRange:
    '(>=29.5:4 && <30) || (>=30.4:4 && <31) || >=31.2:4 || >=#knotsprerdts:29.3:33 || >=#roots:29.4:1',
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
    const blockreservedweight = 66_000

    await sdk.action.createTask(effects, 'bitcoind', autoconfig, 'critical', {
      input: {
        kind: 'partial',
        accept: [{ blocknotify, blockreservedweight }],
        set: { blocknotify, blockreservedweight },
      },
      when: { condition: 'input-not-matches', once: false },
      reason: i18n(
        'Datum requires a particular blocknotify url and enough block weight reserved for its coinbase',
      ),
    })
  }
})

export const dependencies = sdk.Dependencies.of().addDependency(bitcoind)
