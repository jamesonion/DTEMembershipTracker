const examples = require('../controllers/examples.server.controller.js'),
    express = require('express'), 
    router = express.Router()

router.route('/')
  .get(examples.hello);
console.log("WORKS")
  
module.exports = router;
