import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';

// eslint-disable-next-line dot-notation
const client = createClient({ url: process.env['DATABASE_URL'] || '' });

/**
* LibSQL database connection using drizzle-orm.
* This file exports a single database instance for use throughout the application and can perform all database operations.
*/
const database = drizzle({ client });

export default database;
