#!/bin/bash

mkdir temp &&
cp ../qonto-js/{package.json,yarn.lock} ./temp &&
yarn --cwd ./temp outdated --json | $(yarn bin)/format-yarn-outdated --format json | tee outdated.json &&
rm -rf ./temp &&
open -a "Google Chrome" outdated.html
