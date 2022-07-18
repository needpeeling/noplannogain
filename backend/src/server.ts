import express from 'express';
import cors from 'cors';

const app = express();

const port = 5000;

app.use(cors({
    credentials: true,
    origin:["http://localhost:4200"]
}));

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})