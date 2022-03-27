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
    const query = "INSERT INTO Movies (title, year) VALUES (?, ?)";
    const [result] = await connection.query(query, [movie.title, movie.year]);
    return {...movie, id: result.insertId};
}

async function update(movie) {
    const query = "UPDATE Movies SET title = ?, year = ? WHERE id = ?";
    await connection.query(query, [movie.title, movie.year, movie.id]);
    return movie;
}

export async function get(id) {
    const query = "SELECT * FROM Movies WHERE id = ?";
    const [data] = await connection.query(query, [id]);
    return data.pop();
}

export async function remove(id) {
    const query = "DELETE FROM Movies WHERE id = ?";
    await connection.query(query, [id]);
}

export function save(movie) {
    if (movie.id === "") {
        insert(movie);
    } else {
        update(movie);
    }
    return Promise.resolve();
}

