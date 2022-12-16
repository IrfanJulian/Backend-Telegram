const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const helmet = require('helmet');
const xss = require('xss-clean');
const cors = require('cors');
const myCors = require('./src/middlewares/cors');
const app = express();
const mainRouter = require('./src/routes/index');
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({extend: true}))
app.use(helmet());
app.use(xss());
app.use(morgan('dev'));
app.use(cors(myCors));
app.use('/', mainRouter);

app.all('*', (req, res) => {
    res.status(404).json({message: 'Server Not Found'})
});

app.listen(PORT, () => {
    console.log(`Server Running On Port ${PORT}`);
});