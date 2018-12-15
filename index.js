/*const cool = require('cool-ascii-faces')
*/
const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, '/'))) /*changed from public to //*
/*  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
*/
  .get('/', (req, res) => res.render('index'))
/*  .get('/cool', (req, res) => res.send(cool()))
*/
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))