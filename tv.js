/* This will need to be stored somewhere else at some point for security reasons */
const API_KEY = 'api_key=bb1d4e0661af455e02af1ea99fb85fcb'; 
const BASE_URL = 'https://api.themoviedb.org/3/';
/* This can be formatted to include whatever you want -- 'movie/upcoming' is just a placeholder for now */
const API_URL = BASE_URL + 'tv/popular?' + API_KEY + '&language=en-US&page=1';
/* After this URL, add the posterURL return from the API */
const POSTER_URL = 'https://image.tmdb.org/t/p/original/';

/* After the v= comes the key returned by the api call to get all videos for the movie */
const YOUTUBE_TRAILER_URL = 'https://youtube.com/watch?v=';

getTvShows(API_URL);

/* Makes an API fetch call to get movies with whatever url you want -- this could be for upcoming movies, popular, etc */
function getTvShows(url) {
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        displayTvShows(data.results);
    }).catch(error => {
        console.log(error);
    })
}

function displayTvShows(data) {
    data.forEach((tv) => {
        const { name, poster_path, vote_average, overview, backdrop_path, id, first_air_date} = tv;
        const backdropURL = POSTER_URL + backdrop_path;

        /* Use append to response to make another API call and get all of the other info needed */
        
        const tvEl = document.createElement('div');
        tvEl.classList.add('tv');

        tvEl.innerHTML = `
        <label for="${name}" class="btn modal-button" style="height: 400px !important; padding-right: 0px !important; padding-left: 0px !important; margin-right: 10px !important; margin-left: 10px !important; margin-bottom: 10px !important; padding-bottom: 0px !important; width: 250px !important;">
            <img src="${POSTER_URL + poster_path}" alt="poster" style="margin-right: 0px !important; height: 400px !important; width: 250px !important;">
        </label>
        <input type="checkbox" id="${name}" class="modal-toggle" />
        <div class="modal">
            <div class="modal-box w-full max-w-5xl h-full">

                <div class="card w-96 bg-base-100 shadow-xl image-full" style="width: 970px !important; height: 400px !important;">
                    <figure>            
                        <img src="${backdropURL}" alt="backDrop" style="width: 970px !important; height: 500px !important; margin-right: 0px !important; border-radius: 0px !important; border-width: 0px !important; padding: 1px 0px 1px 1px !important;"></img>
                    </figure>
                    <div class="card-body">
                        <h1 class="card-title" style="text-align: center !important;">
                            <font size="+100">${name}</font> 
                        </h1>
                        <br/>
                        <h3> <b> Overview </b> </h3>
                        <p>${overview}</p>

                        <br /> <br />
                        <p><b>Release Date:</b> ${first_air_date    } | <b>Rating:</b> ${vote_average} / 10</p>
                    </div>
                </div>
                <div class="modal-action">
                     <label for="${name}" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                </div>
            </div>
        </div>`;
        
        main.appendChild(tvEl);
    })
}