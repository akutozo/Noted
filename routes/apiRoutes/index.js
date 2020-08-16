const router = require("express").Router();
const { db } = require("../../db/db");

router.get('/db', (req, res) => {
  let results = db;
  if (req.query) {
    results = getNotes(req.query, results);
  }
  res.json(results);
});

router.post("/db", (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = db.length.toString();
    const db = saveNote(req.body, db);
    res.json(db);
    
  });

module.exports = router;