const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.redirect('https://tracker-competitive-programming.cldprv.repl.co/static/index')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});