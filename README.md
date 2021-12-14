# nordic-cli (unofficial)

## What's here

This repository contain a utility to work with nordic

## Installing nordic-cli

To install it, clone the repo and run the following command in the repo root

```bash
$ npm install -g
```

## Usage

If you need generate a nordic page, just run.

```bash
nordic generate page { pageName }
```

## Commands

### generate
use command `generate` to generate files for a nordic page or a react component.

#### arguments
|argument  | description |  |
| ------------ | ------------ |  ------------ |
|  schematic | schematic to generate (`component` or `page`)  |  required |
|  name  | schematic name  | optional |


#### options
|option   | short  | description |
| ------------ | ------------ | ------------ |
|  --skip-client | -sk  | not generate the client file  |
|  --skip-tests | -st  | not generate the test file (.spec)  |
|  --skip-import | -si  | not add the entry point to webpack.config.js  |
