import mysql from "mysql2/promise";


const connection = await mysql.createConnection({
    host: "127.0.0.1",
    port: "8000",
    user: "root",
    password: "hello",
    database: "m151_Datenbankverbindung"
});

await connection.connect();

export async function getAll() {
    const query = 'SELECT * FROM Movies';
    const [data] = await connection.query(query);
    return data;
}

async function insert(movie) {

}

async function update(movie) {

}

export async function get(id) {

}

export async function remove(id) {

}

export function save(movie) {

}

