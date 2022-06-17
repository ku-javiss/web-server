const express = require("express");
const request = require('request');
const router = express.Router();

router.post("/classify", function (req, res) {
    const d = {
      question : req.body.question,
      sdomain : req.body.sdomain
    }
    console.log(d.question);
    console.log(d.sdomain);
    const options = {
      uri : 'http://127.0.0.1:8082/domain_classifier',
      method : 'POST',
      qs : {
        question : d.question,
        sdomain : d.sdomain
      },
      json : true
    };

    request.post(options, function(error, response, body) {
      if(error){
        res.sendStatus(204);
      }
      else{
        res.json(body)
      }
    })
});

module.exports = router;