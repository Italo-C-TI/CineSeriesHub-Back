require('dotenv').config();

import { env } from './env';
import { app } from './app';

import cors from '@fastify/cors';

app.register(cors, {
    origin: true,
});

app.listen({
    host: '0.0.0.0',
    port: env.PORT,
}).then(() => {
    console.log('🚀 HTTP Server Running!');
});