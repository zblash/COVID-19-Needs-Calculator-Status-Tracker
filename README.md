# COVID-19 Needs-Calculator/Status Tracker

## What's For?

In this project, you can calculate some suplies you may need in your home also you can track covid-19 status in world and/or certain countries.

## Installation

1. Clone/download repo
2. `yarn install` (or `npm install` for npm)

## Usage

**Development**

`yarn run start-dev`

- Build app continuously (HMR enabled)
- App served @ `http://localhost:8080`

**Production**

`yarn run start-prod`

- Build app once (HMR disabled) to `/dist/`
- App served @ `http://localhost:3000`

---

**All commands**

| Command               | Description                                                                   |
| --------------------- | ----------------------------------------------------------------------------- |
| `yarn run start-dev`  | Build app continuously (HMR enabled) and serve @ `http://localhost:3030`      |
| `yarn run start-prod` | Build app once (HMR disabled) to `/dist/` and serve @ `http://localhost:3000` |
| `yarn run build`      | Build app to `/dist/`                                                         |
| `yarn run test`       | Run tests                                                                     |
| `yarn run lint`       | Run eslint                                                                    |
| `yarn run fix`        | Run eslint and fix issues                                                     |
| `yarn run start`      | (alias of `yarn run start-dev`)                                               |

**Note**: replace `yarn` with `npm` in `package.json` if you use npm.
