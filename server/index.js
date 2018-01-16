import express from 'express';
import path from 'path';

let app = express();

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, '../index.html'))
    // res.send('hello world!');
});

app.listen(9999, () => console.log('Running on localhost:9999'));