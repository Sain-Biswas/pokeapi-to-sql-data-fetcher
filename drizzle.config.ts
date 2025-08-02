import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/database/schema',
  dialect: 'sqlite',
  dbCredentials: {
    // eslint-disable-next-line dot-notation
    url: process.env['DATABASE_URL'] || ''
  }
});
