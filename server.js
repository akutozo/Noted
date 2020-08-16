//Node Requirements
const express = require('express');
const fs = require('fs');
const path = require('path');

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Setup Port for Heroku, Start Express
const PORT = process.env.PORT || 3001;
const app = express();

// Parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data
app.use(express.json());

// Client Navigation Routes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Let's make it public
app.use(express.static('public'));

// Allow Express to Listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
