# iitm-apollo-server-repro

Node 18

- `npm i`
- `npm run build`

Node crashes when using the loader:

```sh
% npm run start
% echo $?
13
```

```sh
% npm run start-no-loader
% echo $?
0
```
