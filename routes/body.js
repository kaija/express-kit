var express = require('express');
var router = express.Router();
//curl -F 'image=@package.json' -XPOST http://localhost:3000/body/file
router.post('/file',function(req, res, next) {
  var data='';
  req.setEncoding('utf8');
  req.on('data', function(chunk) {
    data += chunk;
  });

  req.on('end', function() {
    req.body = data;
    console.log(req.body);
    res.send('OK');
  });
});

module.exports = router;
