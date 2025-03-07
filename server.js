const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the server!');
});

app.get('/ross', (req, res) => {
    res.send('Ross was here!');
});

const port = 3000;
app.listen(process.env.port || port);
console.log(`Server running on port ${port}`);