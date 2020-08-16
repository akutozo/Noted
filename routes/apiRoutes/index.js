const router = require('express').Router();
const notes = require('./notes');

router.use(notes);

module.exports = router;