const express = require('express');
const path = require('path');
const app = express();
const jsonServer = require('json-server');

const PORT = 3000;
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use('/js', express.static('js'));

// Specific routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});
app.get('/main', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'MainPage.html'));
});
app.get('/create-meeting', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'CreateMeeting.html'));
});
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'Login.html'));
});
app.get('/create-account', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'createAccount.html'));
});

// JSON Server setup
app.use(jsonServer.bodyParser);
app.use(middlewares);
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});