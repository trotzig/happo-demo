#!/usr/bin/env node

const github = require('octonode');

const {
  TRAVIS_COMMIT,
  TRAVIS_COMMIT_RANGE,
  TRAVIS_EVENT_TYPE,
  TRAVIS_REPO_SLUG,
} = process.env;

process.stdout.write(`Commit SHA: ${TRAVIS_COMMIT}\n`);

const client = github.client(process.env.GHE_TOKEN);

const diffURL = process.argv[2];

const repo = octonode.Repository(TRAVIS_REPO_SLUG);

repo.commentOnCommit({
  body: `:lipstick: [Visual diffs or new examples were found](${diffURL}).`,
  commit_id: TRAVIS_COMMIT,
}, (comErr) => {
  if (comErr) {
    process.stderr.write(`Error: ${comErr}\n`);
    process.exit(1);
  }
});
