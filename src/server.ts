import { app } from './app'
import { env } from './env'

app
  .listen({
    port: env.PORT,
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })

// isso abaixo são exemplos e evolucao do código

// http://localhost:3333/hello
// app.get('/hello', async () => {
//   // const tables = await knex('sqlite_schema').select('*')
//   // return tables

//   // const transaction = await knex('transactions')
//   //   .insert({
//   //     id: crypto.randomUUID(),
//   //     title: 'Transação de teste',
//   //     amount: 1000,
//   //   })
//   //   .returning('*')

//   const transaction = await knex('transactions').select('*')

//   return transaction
// })
