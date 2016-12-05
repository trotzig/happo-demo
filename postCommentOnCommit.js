#!/usr/bin/env node

const GithubApi = require('github');

const {
  TRAVIS_COMMIT,
  TRAVIS_REPO_SLUG,
  GHE_TOKEN
} = process.env;

process.stdout.write(`Commit SHA: ${TRAVIS_COMMIT}\n`);

const github = new GithubApi();
github.authenticate({
    type: 'token',
    token: GHE_TOKEN,
});

const diffURL = process.argv[2];

const [owner, repo] = TRAVIS_REPO_SLUG.split('/');
github.repos.createCommitComment({
  body: `:lipstick: [Happo diffs or new examples were found](${diffURL}).`,
  owner,
  repo,
  sha: TRAVIS_COMMIT,
}, (comErr) => {
  if (comErr) {
    process.stderr.write(`Error: ${comErr}\n`);
    process.exit(1);
  }
});
