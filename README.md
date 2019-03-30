# DVHB RANGES

# Getting started

```bash
yarn install

npm start

npm run start:server
```

## Git flow

### Commit's naming

> TODO: add linter

```js
const commitMessage = `${techType}(${nameFunctionality})[${changeType}]: ${description}`;
```

#### Tech types

| Name | Meaning |
| --- | --- |
| `workflow` | Business logic of user feature |
| `style` | View (UI) of user feature |
| `type` | Types definition |
| `docs` | Everything related to the documentation |
| `test` | Tests for functional |
| `deps` | Third party dependency changes (replaces, forks, API improves) |
| `perf` | Performance changes |
| `pretty` | prettify formating, white-space, missing semi-colons, etc |
| `config` | Configuration of the webpack, tslint etc |

#### Change types

- **add** - new functional
- **mod** - modifying functional **with** behavior changes
- **fix** - correcting functional **without** behavior changes (refactor, deps update)
- **del** - delete functional

| Name | Meaning |
| --- | --- |
| `add` | New functional |
| `mod` | Modifying functional **with** behavior changes |
| `fix` | Correcting functional **without** behavior changes (refactor, deps update) |
| `del` | Delete functional |
