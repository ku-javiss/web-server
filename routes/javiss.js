const express = require("express");
const request = require('request');
const router = express.Router();
// process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 1;
router.post("/insert", function (req, res) {
  const d = {
    paragraph : req.body.paragraph,
    question : req.body.question
  }
 

  const options = {
    uri : 'http://127.0.0.1:8082/electra',
    method : 'POST',
    qs : {
      paragraph : d.paragraph,
      question : d.question
    },
    json : true
  };

  request.post(options, function(error, response, body) {
    if(error){
      res.sendStatus(204);
    }
    else{
      console.log(body);
      res.json(body)
    }
  })
});

router.post("/translate",function(req, res){
  var client_id = 'FucZGjv1lCR2A40Tg1NO ';
  var client_secret = 'uNKcYvB6Us';
  var query = req.body.question;
  const api_url = 'https://openapi.naver.com/v1/papago/n2mt';
  var request = require('request');    
  var options = {
      url: api_url,
      form: {'source':'ko', 'target':'en', 'text':query},
      headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
     };
  request.post(options, function (error, response, body) {      
    if (!error && response.statusCode == 200) {
      // res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
      console.log(JSON.parse(body).message.result.translatedText);
      // res.write(JSON.parse(body).message.result.translatedTex);
      res.send(JSON.parse(body).message.result.translatedText);
    } else {
      res.status(response.statusCode).end();        
      console.log('error = ' + response.statusCode);
      }
    });
});

module.exports = router;