const APIKEY = '04c35731a5ee918f014970082a0088b1';
const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
getMovies();
async function getMovies(){
    const resp = await fetch(APIURL);
    const respDate = await resp.json();

    respDate.results.forEach(movie =>{
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <img src="${IMGPATH + movie.poster_path}" alt="${movie.title}">
        <div class="movie-info">
            <h3>${movie.title}</h3>
            <span class=${getColorRating(movie.vote_average)}>${movie.vote_average}</span>
        </div>
        `

        document.querySelector('main').appendChild(movieEl);
    })
}


function getColorRating(vote){
    if(vote > 7){
        return 'green'
    }else if(vote > 6){
        return 'oragnge'
    }else{
        return 'red'
    }
}