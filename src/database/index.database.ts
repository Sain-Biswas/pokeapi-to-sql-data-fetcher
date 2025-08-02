import { createClient } from '@libsql/client';
import { drizzle } from 'drizzle-orm/libsql';
import { env } from '../constants/env.constants';
import * as schema from './schema/index.schema';

const client = createClient({ url: env.DATABASE_URL });

/**
* LibSQL database connection using drizzle-orm.
* This file exports a single database instance for use throughout the application and can perform all database operations.
*/
const database = drizzle({ client, schema });

export default database;
