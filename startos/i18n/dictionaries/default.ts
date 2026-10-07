export const DEFAULT_LANG = 'en_US'

const dict = {
  // main.ts
  'The Datum Gateway dashboard is ready': 0,
  'The Datum Gateway dashboard is not ready': 1,
  'Web Interface': 2,
  'Stratum Interface': 3,
  'Stratum server is available': 4,
  'Stratum server is unavailable': 5,
  'Number of Stratum Clients Connected': 6,
  'Connected Clients: ${num}': 7,
  "Couldn't fetch the number of clients": 8,
  'Estimated Hashrate': 9,
  'Estimated Hashrate: ${num} Th/s': 10,
  "Couldn't fetch the hashrate": 11,

  // interfaces.ts
  'Web UI': 20,
  'The web interface of Datum Gateway': 21,
  'Stratum Server': 22,
  'Point your ASICs here!': 23,

  // dependencies.ts
  'Datum requires a particular blocknotify url': 30,

  // taskResetPassword.ts
  'You must set an admin password to access your Datum UI': 40,

  // taskConfigPoolAddress.ts
  'You must set a pool address': 50,

  // resetPassword.ts
  'Reset Password': 60,
  'Create Password': 61,
  'Reset your admin password': 62,
  'Create your admin password': 63,
  Success: 64,
  'Your new password is below': 65,
  'A new admin password is generated, and the current one stops working.': 280,

  // configPoolAddress
  Address: 70,
  'The Bitcoin address to use for pooled/lotto mining': 71,
  'Config pool address': 72,
  'Config the pool address to mine on.': 73,

  // spec.ts
  'Bitcoin RPC settings': 200,
  'RPC settings for bitcoind': 201,
  'Work Update (Seconds)': 204,
  'How many seconds between routine work updates to your miners': 205,
  'Stratum Server Settings': 206,
  "Configure the Datum gateway's stratum server.": 207,
  'Maximum Clients Per Thread': 210,
  'Max Threads': 212,
  'Max Clients': 214,
  'Maximum total Stratum clients before rejecting connections': 215,
  'Trust PROXY': 216,
  'Enables the PROXY protocol, trusting up to this many levels of proxies in front of your miners. -1 disables it.': 217,
  'Minimum Difficulty': 218,
  'Target Shares per Minute': 220,
  'Adjust work difficulty to target this many shares per minute': 221,
  'Difficulty Update Speed': 222,
  'How many shares before considering a quick diff update': 223,
  'Difficulty Delta': 224,
  'How many times faster than target before enforcing a quick diff bump': 225,
  'Seconds Until Shares Considered Stale': 226,
  'How many seconds after a job is generated before a share is considered stale': 227,
  'Fingerprint Miners': 228,
  'Attempt to fingerprint miners for better use of coinbase space': 229,
  'Username modifiers': 230,
  'Miners addresses to distribute shares': 231,
  'Modifier name': 232,
  'Modifier Address': 234,
  'Bitcoin address': 235,
  'Must be a valid Bitcoin address.': 236,
  'Address split percentage': 237,
  'The sum of all address splits must be equal to 100.': 239,
  'Mining Settings': 238,
  'Bitcoin Address': 240,
  'Bitcoin address used for mining on DATUM Pool, and for solo mining rewards.': 241,
  'Primary Coinbase Tag': 242,
  "Text to have in the primary coinbase tag when solo (overridden by DATUM Pool with the pool's name.)": 243,
  'Secondary Coinbase Tag': 244,
  "Text to have in the secondary coinbase tag. If you're mining on a pool, this is what you label your blocks with.": 245,
  'Coinbase Unique ID': 246,
  'A unique ID between 1 and 65535. Make unique per instance of datum with the same coinbase tags.': 247,
  API: 248,
  'Settings for the Datum Gateway Dashboard': 249,
  'Allow Insecure Authentication': 251,
  'Allow insecure authentication (required for Safari)': 252,
  'This lowers security of the dashboard login. Use it only on trusted networks.': 253,
  Logger: 254,
  'Log Settings': 255,
  'Log Level Console': 256,
  'Minimum log level for console messages (0=All, 1=Debug, 2=Info, 3=Warn, 4=Error, 5=Fatal)': 257,
  'Log to File': 258,
  'Log File': 260,
  'Path to file to write log messages, when enabled': 261,
  'File Log Level': 262,
  'Minimum log level for log file messages (0=All, 1=Debug, 2=Info, 3=Warn, 4=Error, 5=Fatal)': 263,
  Datum: 264,
  'Datum-Gateway settings. These are set to mine on OCEAN by default. Modify to switch to another Datum-supporting pool, or to solo mine.': 265,
  'Pool Host': 266,
  'Remote DATUM server host/ip to use for decentralized pooled mining': 267,
  'Pool Port': 268,
  'Pool Pubkey': 270,
  'Public key of the DATUM server for initiating encrypted connection. Leave empty to auto-fetch.': 271,
  'Pool Pass Workers': 272,
  'Pass stratum miner usernames as sub-worker names to the pool': 273,
  'Pool Pass Full Users': 274,
  'Pass stratum miner usernames as raw usernames to the pool (use if putting multiple payout addresses on miners behind this gateway)': 275,
  'Always Pay Self': 276,
  'Always include my datum.pool_username payout in my blocks if possible': 277,
  'Collaborative reward sharing (pooled mining)': 278,
  '- require: mine through the pool only. If the pool is unreachable, Datum Gateway disconnects your miners.\n- prefer: mine through the pool, and mine solo while the pool is unreachable.\n- never: mine solo. Any block you find pays the Bitcoin Address in Mining Settings.': 279,

  // common
  'Must be alphanumeric.': 1000,
} as const

/**
 * Plumbing. DO NOT EDIT.
 */
export type I18nKey = keyof typeof dict
export type LangDict = Record<(typeof dict)[I18nKey], string>
export default dict
