const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const app = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.set('port', process.env.PORT || 4000);

app.use('/api/employees', require('./routes/employee.routes'));

module.exports = app;
