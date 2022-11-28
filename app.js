const express = require('express')
const app = express()
const port = 3100


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/post', (req, res) => {
    res.send('this is a post!')
  })
  

//MongoDB




app.get('/mongodb', (req, res) => {
  
  res.send('this is mongodb')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})