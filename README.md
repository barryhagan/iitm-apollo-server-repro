# iitm-apollo-server-repro

## Build it

- `npm i`
- `npm run build`

## Run it

Node 18.17.1

```sh
% npm run start

> iitm-apollo-server-repro@0.0.1 start
> node --loader import-in-the-middle/hook.mjs ./lib/src/index.js

(node:98155) ExperimentalWarning: Custom ESM Loaders is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)

% echo $?
13
```

Node 20.5.1

```sh
% npm run start

> iitm-apollo-server-repro@0.0.1 start
> node --loader import-in-the-middle/hook.mjs ./lib/src/index.js

(node:98032) ExperimentalWarning: Custom ESM Loaders is an experimental feature and might change at any time
(Use `node --trace-warnings ...` to show where the warning was created)
file:///iitm-apollo-server-repro/node_modules/@apollo/server/dist/esm/index.js?iitm=true:22
let $* = namespace.*
     ^

SyntaxError: Unexpected token '*'
    at CustomizedModuleLoader.moduleStrategy (node:internal/modules/esm/translators:116:18)
    at CustomizedModuleLoader.moduleProvider (node:internal/modules/esm/loader:190:14)

Node.js v20.5.1

% echo $?
1
```
