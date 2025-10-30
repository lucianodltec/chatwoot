#!/bin/bash
git checkout develop
git fetch upstream
git merge upstream/develop
git push origin develop --no-verify
