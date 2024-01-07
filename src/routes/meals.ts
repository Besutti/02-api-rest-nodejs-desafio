import { FastifyInstance } from 'fastify'
import { knex } from '../database'
import { request } from 'node:http'
import { boolean, z } from 'zod'
import { randomUUID } from 'node:crypto'
import { checkSessionIdExists } from '../middlewares/check-session-id-exists'

export async function mealsRoutes(app: FastifyInstance) {
  app.get(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const meals = await knex('meals').where({ user_id: request.user?.id })

      return {
        meals,
      }
    },
  )

  app.get(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request) => {
      const getMealsParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getMealsParamsSchema.parse(request.params)

      const meals = await knex('meals').where({ user_id: request.user?.id, id })

      return {
        meals,
      }
    },
  )

  app.get(
    '/summary',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const meals = await knex('meals')
        .where({ user_id: request.user?.id })
        .count('id', { as: 'meals' })
        .first()

      const mealsDiet = await knex('meals')
        .where({ user_id: request.user?.id, its_diet: true })
        .count('id', { as: 'mealsDiet' })
        .first()

      const mealsNotDiet = await knex('meals')
        .where({ user_id: request.user?.id, its_diet: false })
        .count('id', { as: 'mealsNotDiet' })
        .first()

      const total = await knex('meals')
        .where({ user_id: request.user?.id })
        .orderBy('created_at', 'desc')

      // tentativa da sequencia
      const ultimaData = 0
      for (let index = 0; index < total.length; index++) {
        const element = total[index]

        tenho que terminar por aqui 
        
        console.log(element)
      }

      return reply.send({
        totalMeals: meals?.meals,
        totalMealsDiet: mealsDiet?.mealsDiet,
        totalMealsNotDiet: mealsNotDiet?.mealsNotDiet,
        // totalMealsOffDiet: totalMealsOffDiet?.total,
        // bestOnDietSequence,
      })
    },
  )

  app.delete(
    '/:id',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      const getMealsParamsSchema = z.object({
        id: z.string().uuid(),
      })

      const { id } = getMealsParamsSchema.parse(request.params)

      await knex('meals')
        .where({
          id,
          user_id: request.user?.id,
        })
        .delete()

      return reply.status(204).send()
    },
  )

  app.post(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      // validação !
      const createMealsBodyShema = z.object({
        name: z.string(),
        description: z.string(),
        itsDiet: z.boolean(),
      })

      const { name, description, itsDiet } = createMealsBodyShema.parse(
        request.body,
      )

      await knex('meals').insert({
        id: randomUUID(),
        user_id: request.user?.id,
        name,
        description,
        its_diet: itsDiet,
      })

      return reply.status(201).send()
    },
  )

  app.put(
    '/',
    {
      preHandler: [checkSessionIdExists],
    },
    async (request, reply) => {
      // validação !
      const createMealsBodyShema = z.object({
        id: z.string(),
        name: z.string(),
        description: z.string(),
        itsDiet: z.boolean(),
      })

      const { id, name, description, itsDiet } = createMealsBodyShema.parse(
        request.body,
      )

      await knex('meals')
        .update({
          name,
          description,
          its_diet: itsDiet,
        })
        .where({ id })

      return reply.status(201).send()
    },
  )
}
