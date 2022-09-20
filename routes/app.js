const express = require('express');
const app = express();
app.set('view engine', 'hbs');
app.get('/', function(req, res) {
    res.send('index.hbs');
});

app.listen(3000)

