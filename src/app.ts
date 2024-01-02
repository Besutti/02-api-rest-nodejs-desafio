// no caso feliz o server.ts importa esse fonte e no momento que acontece isso ele já processa esses esquemas

import fastify from 'fastify'
import { transactionRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

app.register(cookie)

app.register(transactionRoutes, {
  prefix: 'transactions',
})
