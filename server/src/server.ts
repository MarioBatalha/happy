import express from 'express';

import './database/connection';

const app = express();

app.get('/users', (req, res) => {
    return res.json({ name: "Mario Silva"})
});


app.listen(3333);