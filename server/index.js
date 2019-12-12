import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/user.routes';
import mongoose from 'mongoose';
import chai from 'chai';

const assert = chai.assert;


/**
 * Connect to database
 */
const url = 'mongodb://localhost:27017/penalties';
mongoose.connect(url, { useNewUrlParser: true });

/**
* get instance of db, connected to
*/
const db = mongoose.connection;

const app = express();
const PORT = 3000;

/**
* Setup bodyparser
*/
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.get('', function (req, res) {
    res.send(`Node and express server lintening on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log("app is listening on http://localhost:" + PORT);
});