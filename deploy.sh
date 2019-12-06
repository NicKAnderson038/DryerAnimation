#!/usr/bin/env sh

# abort on errors
set -e

# build
echo Building. this may take a minute...
# yarn run build
yarn run build:prod

# overide gitignore
git add -f dist
git commit -m "Initial dist subtree commit"

# push dist contents to gh-pages branch
git subtree push --prefix dist origin gh-pages
