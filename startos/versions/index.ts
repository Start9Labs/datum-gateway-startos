import { VersionGraph } from '@start9labs/start-sdk'
import { current } from './current'
import { v_0_4_1_10 } from './v0.4.1_10'

export const versionGraph = VersionGraph.of({
  current,
  other: [v_0_4_1_10],
})
