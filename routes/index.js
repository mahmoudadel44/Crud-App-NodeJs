var express = require('express');
var router = express.Router();
const controller=require('../controller/controller')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//insert username and password in db
router.post('/insert',controller.insertUser)

//get all info from db
router.get('/getusers',controller.getUsers)

//update userName and Password depend on id
router.post('/update',controller.updateUsers)

// delet user
router.post('/delete',controller.deleteUser)

module.exports = router;
