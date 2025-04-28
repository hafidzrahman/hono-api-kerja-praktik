#!/bin/sh

echo "[INFO] Running Prisma migrations! 🔥"
bunx prisma migrate deploy

echo "[INFO] Seeding the database! 🌱"
bunx prisma db seed

echo "[INFO] Starting the server! 🚀"
bun run src/index.ts