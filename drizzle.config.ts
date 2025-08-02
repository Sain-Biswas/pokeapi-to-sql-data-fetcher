import { defineConfig } from 'drizzle-kit';
import { env } from './src/constants/env.constants';

export default defineConfig({
  out: './drizzle',
  schema: './src/database/schema',
  dialect: 'sqlite',
  dbCredentials: {
    url: env.DATABASE_URL
  }
});
