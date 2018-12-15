var express = require('express');
var app = express();
var path = require('path');
let PORT = process.env.PORT || 7000;

// viewed at http://localhost:8080
/*app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index'));
});
||||||| merged common ancestors
const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});
const cool = require('cool-ascii-faces')
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
=======
var express = require('express');
var app = express();
var path = require('path');
let PORT = process.env.PORT || 7000;
>>>>>>> b62d8d125f313e0930b163286878f136edd0fc02

<<<<<<< HEAD
app.listen(7001);
||||||| merged common ancestors
express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/cool', (req, res) => res.send(cool()))
  .get('/times', (req, res) => res.send(showTimes()))
.listen(PORT, () => console.log(`Listening on ${ PORT }`))

showTimes = () => {
  let result = ''
  const times = process.env.TIMES || 5
  for (i = 0; i < times; i++) {
    result += i + ' '
  }
  return result;
}
=======
*/// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index'));
});

app.listen(PORT);