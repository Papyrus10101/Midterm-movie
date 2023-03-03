const APIKEY = "35c0a5cafd0d4904900f2dca87ee7bb3";




let movieData;

const fetchesMovies = async () => {
    try {
        return await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${APIKEY}`)
    } catch(error) {
        console.log(error);
        alert("There was an error", error);
    }
}



function search(movieTitle) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}query=${keyword.value}` + movieTitle)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });
}


const getMovieDataByKeyword = async () => { 
    try {
        return await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${APIKEY}`)
    } catch(error) {
        console.log(error);
        alert("There is an error", error)
    }
   
}




const generateUI = (arrayOfMovies) => {
    let movieSection = document.getElementId('movie-section')
    movieSection.innerHTML = "";

    arrayOfMovies.forEach((imageObject) => {
        let imageContainer = document.createElement('div');


        imageContainer.innerHTML =`
        <img src=${movieObject.url}>
        <time>Created at : ${ modifyDate(movieObject.createdAt) }</time>
        <p>${movieObject.description}</p>
        `
    
        photoSection.appendChild(movieContainer);
    })
        
}


function modifyDate(date) {
    let d = new Date(date);

    return d.localDateString();
}




const genres = [
    {id: 28, name: 'Action'},
    {id: 12, name: 'Adventure'},
    {id: 16, name: 'Animation'},
    {id: 35, name: 'Comedy'},
    {id: 80, name: 'Crime'},
    {id: 99, name: 'Documentary'},
    {id: 18, name: 'Drama'},
    {id: 10751, name: 'Family'},
    {id: 14, name: 'Fantasy'},
    {id: 36, name: 'History'},
    {id: 27, name: 'Horror'},
    {id: 10402, name: 'Music'},
    {id: 9648, name: 'Mystery'},
    {id: 10749, name: 'Romance'},
    {id: 878, name: 'Science Fiction'},
    {id: 10770, name: 'TV Movie'},
    {id: 53, name: 'Thriller'},
    {id: 10752, name: 'War'},
    {id: 37, name: 'Western'}
];


async function getData() {
    const { data } = await search();
    movieData = data.map((movirObject) => {
        return{
            url: movieObject.urls.regular,
            createdAt: movieObject.created_at,
            likes: movieObject.likes,
            description: movieObject.description || "Random Description"
        }
    });

    generateUI(movieData);
}



getData();
