
const express = require('express');
const router  = express.Router();

module.exports = () => {
  router.get("/", (req, res) => {
    res.send({ 
      token: 'test123'
    })
  });
    
  return router;
};