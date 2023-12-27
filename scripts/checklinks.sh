#!/bin/sh -e
htmlproofer --allow_hash_href=true --check-external-hash=false --assume_extension --disable_external --enforce-https=false ./_site
