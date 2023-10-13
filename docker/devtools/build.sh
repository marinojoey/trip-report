#!/bin/sh

set -e
set -0 pipefail

case "$1" in
production) CMD=build
    ;;
*) CMD= start
    ;;
esac

echo "Building client (yarn $CMD)..."
npm --silent --cwd /app/client $CMD