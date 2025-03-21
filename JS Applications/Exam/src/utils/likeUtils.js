import { api } from "./requests.js";

// In likeService.js
const host = "http://localhost:3030";
const urls = {
    "isLiked": "/data/likes?where=tattooId%3D%22{tattooId}%22%20and%20_ownerId%3D%22{userId}%22&count",
    "postLike": "/data/likes",
    "getSolutionById": "/data/likes?where=tattooId%3D%22{tattooId}%22&distinct=_ownerId&count",
};

async function like(data) {
    return await api.post(host + urls.postLike, data);
}

async function getLikes(tattooId) {
    return await api.get(host + urls.getSolutionById.replace("{tattooId}", tattooId));
}

async function isLiked(tattooId, userId) {
    return await api.get(host + urls.isLiked.replace("{tattooId}", tattooId).replace("{userId}", userId));
}

export const likeService = {
    like,
    getLikes,
    isLiked
};
