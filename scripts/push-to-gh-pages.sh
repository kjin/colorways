#!/bin/bash

git config user.name github-actions
git config user.email github-actions@github.com
git add main.js index.html
if git commit -m "Regenerate gh-pages from ${GITHUB_SHA}"; then
  git push -fq origin gh-pages
else
  echo "No changes detected from ${GITHUB_SHA}"
fi
