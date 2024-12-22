const express = require('express');
const path = require('path');

const server = express();
const PORT = 3000;

server.use(express.static(path.join(__dirname, 'public')));

server.use((req, res) => {
    res.status(404).send('404 Not Found');
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});