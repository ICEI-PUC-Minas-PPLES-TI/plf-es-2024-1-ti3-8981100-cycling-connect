// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Ei amorzinho')

//     return response.end()
// })

// server.listen(3333)

// localhost:3333

import { fastify } from 'fastify'
// import { DatabaseMemory } from './database-memory.js'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()

// const database = new DatabaseMemory()
const database = new DatabasePostgres()


server.post('/notice', async (request, reply) => {  
    const { title, description } = request.body
    
    await database.create({
        title,
        description,
    })  

    return reply.status(201).send()
})

server.get('/notice', async (request) => {
    const search = request.query.search

    const notices = await database.list(search)  

    return notices
}) 

server.put('/notice/:id', async (request, reply) => {
    const noticeID = request.params.id
    const { title, description } = request.body
 
    await database.update(noticeID, {
        title,
        description,
    })

    return reply.status(204).send()
})

server.delete('/notice/:id', async (request, reply) => {
    const noticeID = request.params.id
    
    await database.delete(noticeID)

    return reply.status(204).send()
}) 

server.listen({
    host: '0.0.0.0',
    port: process.env.PORT ?? 3333
})





