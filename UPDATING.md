# Updating the upstream version

Datum Gateway is built from source by the `Dockerfile` at the repo root. The upstream C sources are pinned via a git submodule at `datum_gateway/` tracking [`OCEAN-xyz/datum_gateway`](https://github.com/OCEAN-xyz/datum_gateway). There is no `dockerTag` to bump — the image is built locally from whatever commit the submodule points at.

## Determining the upstream version

- [`OCEAN-xyz/datum_gateway`](https://github.com/OCEAN-xyz/datum_gateway) — list tags, then read the matching release rather than relying on GitHub's Latest badge:
  ```bash
  gh api repos/OCEAN-xyz/datum_gateway/tags --paginate --jq '.[].name'
  gh release view <tag> -R OCEAN-xyz/datum_gateway
  git ls-remote https://github.com/OCEAN-xyz/datum_gateway.git "refs/tags/<tag>*"
  ```
  The current pin lives in the submodule pointer; inspect it with:
  ```bash
  git -C datum_gateway describe --tags --always
  ```

## Version mapping and review scope

This package deliberately follows upstream's public-beta release line. Upstream tags use a suffix without a hyphen, such as `v0.5.0beta`; preserve it in ExVer as `0.5.0-beta:0`. Reset the wrapper revision to zero on each upstream bump.

Treat `0.x` minor jumps as major-review scope. Check the new source's configuration table, listeners, dashboard statistics, RPC cookie handling, persistent paths, and Bitcoin requirements. Upstream's node configuration (`doc/INSTALL.md`) is mirrored by the Auto-Configure task in `startos/dependencies.ts`; when it changes, change the task, and raise the Bitcoin floors in `versionRange` if Bitcoin must expose a new setting first.

## Applying the bump

- Update the submodule to the new upstream tag:
  ```bash
  cd datum_gateway
  git fetch --tags
  git checkout <new-tag>
  cd ..
  git add datum_gateway
  ```

- Update `startos/versions/current.ts` and its localized release notes. Preserve any outgoing migration in a version-named file and register it in `startos/versions/index.ts`.
- Copy the pinned upstream `LICENSE` to the package root when it changes.
