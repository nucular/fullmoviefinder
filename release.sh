#!/usr/bin/env bash
# bash release.bat
set -e
git checkout gh-pages
git rebase master
make src/main.css
git add src/main.css
[ -d "bower_components" ] || bower install
git add bower_components
git commit -m "Build"
git checkout -f master
