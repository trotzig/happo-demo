#!/bin/bash

run_happo_ci() {
  echo "Checking out $1"
  # Checkout the commit
  git checkout --quiet "$1"

  # Install dependencies and build the JavaScript bundle
  yarn install
  npm run --silent webpack

  # Run Happo for the current commit. We use `xvfb-run` so that we can run
  # Happo (which uses Firefox) in a headless display environment.
  xvfb-run npm run --silent happo run
}

# Check out the previous version and generate baseline snapshots
echo "Running Happo on previous version..."
run_happo_ci "HEAD^"

# Check out the latest version and check for diffs
echo "Running Happo on latest version..."
run_happo_ci "$TRAVIS_COMMIT"

URL_TO_DIFFS=$(npm run --silent happo upload)
echo "URL to diffs: $URL_TO_DIFFS"

if [ -n "$URL_TO_DIFFS" ]; then
  node postCommentOnCommit.js "$URL_TO_DIFFS"
fi
