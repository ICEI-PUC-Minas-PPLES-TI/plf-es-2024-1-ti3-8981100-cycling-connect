import { fastify } from 'fastify'
import { DatabasePostgres } from './database-postgres.js'

const server = fastify()
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





