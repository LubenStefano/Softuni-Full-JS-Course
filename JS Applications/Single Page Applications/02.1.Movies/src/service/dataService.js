import { api } from "../utils/requests.js"

const urls = {
    "getAllMovies": "http://localhost:3030/data/movies",
    "createMovie": "http://localhost:3030/data/movies",
    "movieById": "http://localhost:3030/data/movies/",
    "movieLikes": "http://localhost:3030/data/likes?where=movieId%3D%22{movieId}%22&distinct=_ownerId&count",
    "likesFromUser": "http://localhost:3030/data/likes?where=movieId%3D%22{movieId}%22%20and%20_ownerId%3D%22{userId}%22",
    "addLike": "http://localhost:3030/data/likes",
    "deleteLike": "http://localhost:3030/data/likes/"
}
async function getAllMovies(){
    return await api.get(urls.getAllMovies);
}
async function createMovie(data){
    return await api.post(urls.createMovie, data);
}
async function getMovieById(id){
    return await api.get(urls.movieById + id);
}
async function deleteMovie(id){
    return await api.remove(urls.movieById + id);
}
async function getMovieLikes(movieId){
    return await api.get(urls.movieLikes.replace("{movieId}", movieId));
}
async function getLikesFromUser(movieId, userId){
    return await api.get(urls.likesFromUser.replace("{movieId}", movieId).replace("{userId}", userId));
}
async function addLike(data){
    return await api.post(urls.addLike, data);
}
async function deleteLike(likeId){
    return await api.remove(urls.deleteLike + likeId);
}
async function editMovie(id, data){
    return await api.put(urls.movieById + id, data);
}

export const dataService = {
    getAllMovies,
    createMovie,
    getMovieById,
    deleteMovie,
    getMovieLikes,
    getLikesFromUser,
    addLike,
    deleteLike,
    editMovie
}