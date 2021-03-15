let express = require('express')
var fs = require('fs');
var database = JSON.parse(fs.readFileSync('database.json', 'utf8'));
let app = express()

const PORT = process.env.PORT || 3100

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.get('/get-cities', (req, res) => {
  const result = [];
  database.weather.filter( item => result.push(item.name) )
  res.json(result)
})
app.get('/get-weather/:id', function (req, res, next) {
  var name = req.params.id;
  let result = database.weather.find( item => item.name.toLowerCase() === name.toLowerCase() )
  res.json(result);
});
app.listen(PORT,()=>{
    console.info(`Server is running on ${PORT}`)
})
