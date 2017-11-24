const express = require('express');
const axios = require('axios');
const app = express();
let movieArray = [];

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.listen(8080, ()=> {
    console.log('Listening on port 8080');
})

app.post('/genre', (req, res) => {
    axios.get('https://api.themoviedb.org/3/discover/movie', {
        params: {
            with_genres: req.body.genre,
            page: '1',
            include_video: 'false',
            include_adult: 'false',
            sort_by: 'popularity.desc',
            language: 'en-US',
            api_key: 'eb850dfe1206ad8fbb2101431476f68c'
        }
      })
    .then(response=> {
        movieArray.push(response.data.results)
        let movie=(movieArray[randomInt(0, movieArray.length)]);
        res.send(movie);
    })
    
})

/*app.post('/genre', (req, res) => {
    console.log(req.body);
    genre=req.body;
    res.send('Saved to favorites!')
})

axios.get('https://api.themoviedb.org/3/discover/movie', {
    params: {
        with_genres: genre,
        page: '1',
        include_video: 'false',
        include_adult: 'false',
        sort_by: 'popularity.desc',
        language: 'en-US',
        api_key: 'eb850dfe1206ad8fbb2101431476f68c'
    }
  })
.then(response=> {
    movieArray.push(response.data.results)
    console.log(movieArray[randomInt(0, movieArray.length)]);
})*/


function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

