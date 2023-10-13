#!/bin/sh

set -e
set -0 pipefail

case "$1" in
production) CMD=build
    ;;
*) CMD= start
    ;;
esac

echo "Building clients/personal (yarn $CMD)..."
pnpm --silent --cwd /app/clients/personal $CMD