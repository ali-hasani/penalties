import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employee.routes';
import fileRoutes from './routes/file.routes';
import statisticsRoutes from './routes/statistics.routes';
import penaltyRoutes from './routes/penalty.routes';
import mongoose from 'mongoose';

/**
 * Connect to database
 */
const url = 'mongodb://localhost:27017/penalties';
mongoose.connect(url, { useNewUrlParser: true });

const app = express();
const PORT = 3000;

/**
* Setup app
*/
app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb' }));

/**
* route configs
*/
employeeRoutes(app);
fileRoutes(app);
statisticsRoutes(app);

app.get('', function (req, res) {
    res.send(`Node and express server lintening on port ${PORT}`);
});

app.listen(PORT, () => {
    console.log(`app is listening on http://localhost:${PORT}`);
});