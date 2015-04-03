#!/usr/bin/env bash
# bash release.bat
set -e
git branch gh-pages origin/gh-pages ||
git checkout gh-pages
git merge master
make src/main.css
git add src/main.css
[ -d "bower_components" ] || bower install
git add bower_components
git commit -m "Build"
git push origin gh-pages
git checkout -f master
