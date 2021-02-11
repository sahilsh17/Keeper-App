
const express = require('express');
const router  = express.Router();

module.exports = (db) => {
  router.get("/", (req, res) => {
    db.query(`SELECT * FROM notes;`)
    .then(data => {
        const notes = data.rows;
        res.json({ notes });
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
  });
    router.post("/",(req,res) => {
      const values = [req.body.title, req.body.content];
      const query = `Insert into notes(title, content) values($1,$2);`
      db.query(query, values)
      .then(data => {
        res.status(200).json({result: true})
      })
      .catch(err => {
        res
          .status(500)
          .json({ error: err.message });
      });
    })
  return router;
};