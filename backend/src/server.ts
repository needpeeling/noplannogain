
const dbJson = require('./db.json');
const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = 3000;

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

// db connection
const db = mysql.createConnection({
    host: dbJson.host,
    user: dbJson.user,
    password: dbJson.password,
    database: dbJson.database,
    port: dbJson.port
})

// check db connection
db.connect((err: any) => {
    let db_status = err ? err: 'database connected...';
    console.log(db_status);
})

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})