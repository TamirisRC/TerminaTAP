import express from 'express';
import bodyParser from 'body-parser';
import DatabaseFactory from './databaseFactory.js';
import PersonRoute from './routes/personRoute.js';

const app = express();
app.use(bodyParser.json());

const dbConfig = {
    DB_TYPE: 'sqlite', 
    DB_HOST: 'localhost',
    DB_USER: 'root',
    DB_PASS: 'password',
    DB_NAME: 'test_db'
};

const database = DatabaseFactory.createDatabase(dbConfig);
await database.connect();

const personRoute = new PersonRoute(database);
app.use('/api', personRoute.router);

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});