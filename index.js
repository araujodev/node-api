const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/index');
const app = express();

app.use(routes);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.listen(8040, () => {
    console.log("Running on 8040.");
});