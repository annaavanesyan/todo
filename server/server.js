const bodyParser = require('body-parser');
const Express = require('express');
const uuidv4 = require('uuid/v4');

let items = [
    { id: uuidv4(), item: 'have a walk' },
    { id: uuidv4(), item: 'watch a movie' }
];

// TODO: add db connection
// const db = require('./db');
// db.connect();

const app = new Express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, OPTIONS, DELETE'
    );
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );

    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/items', (rew, res) => {
    res.status(200);
    res.send(items);
});

app.post('/items', (req, res) => {
    items.push({
        id: uuidv4(),
        item: req.body.item
    });

    res.status(201);
    res.json(items);
});

app.delete('/items/:id', (req, res) => {
    const { id } = req.params;

    items = items.filter(item => {
        if (item.id !== id) {
            return item;
        }
    });

    res.status(200);
    res.json(items);
});

const server = require('http').createServer(app);
const port = '4567';

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
