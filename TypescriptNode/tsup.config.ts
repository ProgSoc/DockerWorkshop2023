import { defineConfig } from 'tsup';

export default defineConfig(({ watch }) => ({
  entry: ['src/app.ts'],
  format: ['cjs'],
  clean: true,
  sourcemap: true,
  onSuccess: watch
    ? 'node --enable-source-maps dist/app.js --inspect'
    : undefined,
}));