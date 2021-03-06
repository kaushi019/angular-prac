const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use(express.static(__dirname+'/dist/ng-one'))

app.get('/', (req, res) => {
  res.sendFile(dirname__ + '/dist/ng-one/index.html')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})