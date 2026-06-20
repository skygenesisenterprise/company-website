#!/bin/sh
set -eu

SCRIPT_DIR="$(CDPATH= cd -- "$(dirname -- "$0")" && pwd)"

echo "scripts/fix-migration.sh is deprecated because it used to choose a repair"
echo "strategy automatically. Use scripts/prisma-repair.sh for explicit,"
echo "non-destructive inspection and repair commands."
echo

exec "${SCRIPT_DIR}/prisma-repair.sh" "${1:-inspect}"
