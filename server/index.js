import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from './routes/employee.routes';
import mongoose from 'mongoose';
import chai from 'chai';

const assert = chai.assert;

/**
 * Connect to database
 */
const url = 'mongodb://localhost:27017/penalties';
mongoose.connect(url, { useNewUrlParser: true });

const app = express();
const PORT = 3000;

/**
* Setup bodyparser
*/
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

routes(app);

app.get('', function (req, res) {
    res.send(`Node and express server lintening on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log("app is listening on http://localhost:" + PORT);
});