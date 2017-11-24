const axios = require('axios');
let movieArray = [];
let genre='18';

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


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
})