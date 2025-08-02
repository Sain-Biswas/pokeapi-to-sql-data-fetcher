import z from 'zod';

const environmentVariablesSchema = z.object({
  DATABASE_URL: z.url().or(z.string().startsWith('file:')),
  NODE_ENV: z['enum'](['development', 'production', 'test'])
});

const parsedEnvironmentVariables = environmentVariablesSchema.safeParse(process.env);

if (!parsedEnvironmentVariables.success) {
  console.error('Environment variables not configured properly:', parsedEnvironmentVariables.error.message);
  process.exit(1);
}
export const env = parsedEnvironmentVariables.data;
export type TEnv = z.infer<typeof environmentVariablesSchema>;
