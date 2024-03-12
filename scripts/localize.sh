#!/bin/sh -e
for page in *.md; do
    for lang in `cat _config.yml | yq '.languages.[]'`; do
        mkdir -p ${lang}
        cd ${lang}
        ln -sfv ../${page} .
        cd -
    done
done

