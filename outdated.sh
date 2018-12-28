#!/bin/bash

cp ../qonto-js/{package.json,yarn.lock} ./temp &&
yarn --cwd ./temp outdated --json | $(yarn bin)/format-yarn-outdated --format json > public/outdated.json &&
# Clean temp
open -a "Google Chrome" outdated.html
