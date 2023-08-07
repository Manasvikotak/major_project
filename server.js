

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Set up body-parser middleware to parse form data
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' folder
app.use(express.static('public'));

// GET route to serve the login page
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// POST route to handle form submission
app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    // Display the entered username and password in the browser
    res.send(`You entered: Username - ${username}, Password - ${password}`);
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
