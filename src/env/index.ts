import 'dotenv/config';
import { z as typingRules} from 'zod'

const envSchema = typingRules.object({
    NODE_ENV: typingRules.enum(['dev', 'local', 'production']).default('dev'),
    PORT: typingRules.coerce.number().default(3000)
})

const _env = envSchema.safeParse(process.env);

const texts = {
    environmentVariablesError: 'Invalid environment variables!'
}

if (!_env.success) {
    console.error(`❌ ${texts.environmentVariablesError}`, _env.error.format());
    throw new Error(texts.environmentVariablesError);
}

export const env = _env.data;