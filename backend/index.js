import express from "express";
import cors from "cors";
import pg from "pg";
import env from "dotenv";

const app = express();
const port = 5000;
app.use(cors());
env.config();

const db = new pg.Client({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

db.connect();
app.get("/", async (req, res) => {
    try {
        const result = await db.query("SELECT * FROM players");
        res.json(result.rows);
    } catch (error) {
        res.json(error);
    }
});

app.listen(port, () => {
    console.log(`App is succesfully running on port ${port}!`);
})