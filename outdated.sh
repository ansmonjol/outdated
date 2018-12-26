#!/bin/bash

cd ../qonto-js &&
yarn --cwd ../outdated outdated --json | tee outdated.json &&
mv outdated.json ../outdated &&
$(yarn bin)/format-yarn-outdated --format json &&


open -a "Google Chrome" outdated.html
