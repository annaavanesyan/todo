const mongoose = require('mongoose');

module.exports = {
    connect() {
        const uri = 'mongodb://localhost:27017/todo';

        mongoose.connect(uri, { useCreateIndex: true, useNewUrlParser: true });

        const db = mongoose.connection;

        db.on('error', err => {
            console.log(err);
            process.exit(1);
        });

        db.once('open', () => {
            console.log(`Db connected on ${uri}`);
        });
    }
};
