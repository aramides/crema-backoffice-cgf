#!/bin/bash

shopt -s globstar
for file in src/**/*.js; do
    if [[ -f "$file" ]]; then
        mv -- "$file" "${file%.js}.jsx"
    fi
done

