const express = require('express');
const app = express();
const port = 5432;
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded());
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    console.log("Someone join");
    res.redirect('/home')
});

app.get('/home', (req, res) => {
    res.sendFile('public/home.html', {root: __dirname});
});

app.post('/checking', (req, res) => {
    if (req.body.room == "Create Room !") {
        res.redirect('/create');
    } else {
        res.redirect('/join');
    }
});

app.get('/create', (req, res) => {
    res.sendFile('public/createRoom.html', {root: __dirname});
});

app.get('/join', (req, res) => {
    res.sendFile('public/joinRoom.html', {root: __dirname});
});

app.listen(port, () => {
    console.log("Server is listening on localhost:" + port);
});