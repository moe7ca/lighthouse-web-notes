


const express = require('express');
const router  = express.Router();

module.exports = (db) => {

//GET /quiz/create
router.get('/create', (req, res) => {
  const templateVars = {user_id: 1||req.session.user_id, name: "maan"||req.session.name}
    res.render('../views/createQuiz', templateVars);
});


  return router;
};





