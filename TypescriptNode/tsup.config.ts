import { defineConfig } from 'tsup';

export default defineConfig(({ watch }) => ({
  entry: ['src/main.ts'],
  format: ['cjs'],
  clean: true,
  sourcemap: true,
  onSuccess: watch
    ? 'node --enable-source-maps dist/main.js --inspect'
    : undefined,
}));