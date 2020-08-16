//Node Requirements
const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db');
const notes = require("./db/db");
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

// Loading Notes
app.get('/api/notes', (req, res) => {
    res.json(db);
    // console.log(db);
  });

// Adding Notes
app.post('/api/notes', (req, res) => {
    req.body.id = notes.length.toString();
    console.log(req.body.id);
    const note = req.body
    db.push(note);
    console.log(note);
    fs.writeFile('db/db.json', JSON.stringify(db , null, 2), function (err, data) {
        if (err) {
        throw err
        } else {
        res.send(data)
        }
    });
});

// Let's make it public
app.use(express.static('public'));

// Allow Express to Listen
app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
