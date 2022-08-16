const express = require('express')
const cors = require('cors')

const app = express()


//middleware
app.use(express.json())
app.use(cors())

///////// endpoints go here ////////////
const {getMovies, deleteMovie, createMovie} = require('./controller.js')

app.get('/api/movies', getMovies)
app.delete('/api/movies/:id', deleteMovie)
app.post('/api/movies', createMovie)
app.put('/api/movies/:id', updateMovie)


////////////////////////////////////////


app.listen(4004,() => console.log('Running on port 4004'))