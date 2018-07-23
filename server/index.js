const path = require('path');
const express = require('express');
const app = express();
const logger = require('morgan');
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const db = require('./db')

app.use(logger('dev'))

app.use(express.static(path.join(__dirname, './path/to/static/assets')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.use('/api', require('./api'))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './path/to/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error.')
})



app.listen(port, () => {
  console.log(`your server is listening on port ${port}`);
});

db.sync({force:true})
    .then(() => {
        console.log('seeding worked!')
    })
    .catch((err) => {
        console.log('seeding did not work')
        console.log(err.stack)
    })
