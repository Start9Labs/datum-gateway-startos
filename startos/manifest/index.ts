import { setupManifest } from '@start9labs/start-sdk'
import { long, short } from './i18n'

export const manifest = setupManifest({
  id: 'datum',
  title: 'Datum Gateway',
  license: 'mit',
  packageRepo: 'https://github.com/Start9Labs/datum-gateway-startos',
  upstreamRepo: 'https://github.com/ocean-xyz/datum-gateway',
  marketingUrl: 'https://ocean.xyz',
  donationUrl: null,
  description: { short, long },
  volumes: ['main'],
  images: {
    datum: {
      source: {
        dockerBuild: {
          dockerfile: 'Dockerfile',
          workdir: '.',
        },
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissing: false,
    },
  },
})
