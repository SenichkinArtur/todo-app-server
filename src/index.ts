import express, { Express } from 'express';

const app: Express = express();
const port: number = 3100;

app.get('/', (req, res) => {
    res.send('get request to the home page');
});

app.listen(port, () => {
    return console.log(`server is listening on ${port}`);
});
