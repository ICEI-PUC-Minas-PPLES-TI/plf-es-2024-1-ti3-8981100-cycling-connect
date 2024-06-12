import { randomUUID } from 'node:crypto'
import { sql } from './db.js'
 
export class DatabasePostgres {
    async list(search) {
        let notices

        if(search){
            notices = await sql`select * from notices where title ilike ${'%' + search + '%'}`
        } else {
            notices = await sql`select * from notices`
        }

        return notices
    }

    async create(notice) {
        const noticeID = randomUUID()
        const { title, description } = notice

        await sql`insert into notices (id, title, description) VALUES (${noticeID}, ${title}, ${description})`
    }

    async update(id, notice){
        const { title, description } = notice

        await sql`update notices set title = ${title}, description = ${description} WHERE id = ${id}`

    }

    async delete(id){
        await sql`delete from notices where id = ${id}`
    }
}

