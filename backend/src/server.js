
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const userRouter = require('./routes/user');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyparser.json());

app.use('/user', userRouter);

app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})