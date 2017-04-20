var path = require('path');
var express = require('express')
var app = express()

app.use(express.static(path.join(__dirname, 'public')));

//  app.get('/', function (req, res) {
//      res.send('Hello World!')
//  })

app.get('/response/:id', function (req, res) {
    var howAreYouFeeling = "confused"
    if(req.params.id == 1){
      howAreYouFeeling = "happy"
    }
    else if(req.params.id == 2){
      howAreYouFeeling = "sad"
    }
    else if(req.params.id == 3){
      howAreYouFeeling = "poopy"
    }
    console.log('Yay! Got some feedback! Value ID is: ' + req.params.id + ', which means they are feeling ' + howAreYouFeeling)
    res.send('Thanks for your response :-)')
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!')
})

