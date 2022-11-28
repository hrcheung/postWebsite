const express = require('express')
const { title } = require('process')
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
  const { MongoClient } = require("mongodb");

  // Replace the uri string with your connection string.
  const uri =
    "mongodb+srv://m001-student:HfRxQyVrhkR2F0XO@sandbox.jezcu.mongodb.net/?retryWrites=true&w=majority";
  
  const client = new MongoClient(uri);
  
  async function run() {
    try {
      const database = client.db('sample_mflix');
      const movies = database.collection('movies');
  
      // Query for a movie that has the title 'Back to the Future'
      const query = { title: 'Back to the Future' };
      const movie = await movies.findOne(query);
  
      console.log(movie);
      return movie;
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  res.send(run())
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})