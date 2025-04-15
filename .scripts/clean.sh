#!/bin/bash

# Clean folders
find . -name 'node_modules' -type d -prune -exec rm -rf '{}' +
find . -name 'dist' -type d -prune -exec rm -rf '{}' +

# Clean files
find . -name '*-lock' -type f -prune -exec rm -rf '{}' +
find . -name '*.lock' -type f -prune -exec rm -rf '{}' +
find . -name '*.log' -type f -prune -exec rm -rf '{}' +
