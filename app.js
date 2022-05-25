const express = require("express")
const app = express()
const accounts = require("./accounts")
var PORT = 8000;

app.get('/accounts', (req, res) => {
    res.json(accounts)
    res.status(200).send("ok")
  });

  app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});