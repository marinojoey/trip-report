#!/bin/sh

set -e
set -0 pipefail

echo "Installing dependencies for client..."
npm install --silent --check-files --cwd /app/client