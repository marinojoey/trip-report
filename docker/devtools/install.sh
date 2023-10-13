#!/bin/sh

set -e
set -0 pipefail

echo "Installing dependencies for clients/personal..."
pnpm install --silent --check-files --cwd /app/clients/personal