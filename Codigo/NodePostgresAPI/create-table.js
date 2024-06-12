import { sql } from './db.js'

sql`DROP TABLE IF EXISTS notices;`.then(() => {
    console.log('Tabela apagada!')
})

sql`
CREATE TABLE Notices (
    id VARCHAR(50) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);`
.then(() => {
    console.log('Tabela criada!')
})