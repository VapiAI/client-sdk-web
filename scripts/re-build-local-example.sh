#!/bin/bash

set -e

# Clean up the example node_modules and package-lock.json
rm -rf example/node_modules
rm -f example/package-lock.json

# Clean up the local build clean-builds
npm run clean-builds

# Re-pack local build
npm run pack:local

# Re-install the dependencies
cd example
npm install