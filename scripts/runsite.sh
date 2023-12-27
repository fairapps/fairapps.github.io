#!/bin/sh -ve
# can't do this because the local links can't be resolved
#./scripts/checklinks.sh
bundle exec jekyll serve --livereload
