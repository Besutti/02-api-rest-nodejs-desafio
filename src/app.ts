import fastify from 'fastify'
import { userRoutes } from './routes/users'
import cookie from '@fastify/cookie'
import { mealsRoutes } from './routes/meals'

export const app = fastify()

app.register(cookie)

app.register(userRoutes, {
  prefix: 'users',
})

app.register(mealsRoutes, {
  prefix: 'meals',
})
