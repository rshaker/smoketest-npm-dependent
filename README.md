# smoketest-npm-dependent

<img width="250px" src="assets/tent2.png">

A package that depends on smoketest-npm.

## Usage

```sh
% git clone https://github.com/rshaker/smoketest-npm-dependent
% cd smoketest-npm-dependent
```

```sh
% nvm use

Found '/Users/rshaker/smoketest-npm/.nvmrc' with version <v18.12.1>
Now using node v18.12.1 (npm v9.2.0)
```

```sh
% npm install
% npm build
```

```sh
% node test/testNode.js

Node.js test passed successfully.
```

```sh
% open test/testBrowser.html

Browser test passed successfully.
```
