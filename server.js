const express = require('express');
const app = express();
const port = 5432;

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log("Someone join");
    res.redirect('/home')
});

app.get('/home', (req, res) => {
    console.log(__dirname);
    res.sendFile('public/home.html', {root: __dirname});
});

app.listen(port, () => {
    console.log("Server is listening on localhost:" + port);
});