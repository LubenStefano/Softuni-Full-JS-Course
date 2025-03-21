import { api } from "./requests.js";

// In likeService.js
const host = "http://localhost:3030";
const urls = {
    "isLiked": "/data/likes?where=solutionId%3D%22{solutionId}%22%20and%20_ownerId%3D%22{userId}%22&count",
    "postLike": "/data/likes",
    "getSolutionById": "/data/likes?where=solutionId%3D%22{solutionId}%22&distinct=_ownerId&count",
};

async function like(data) {
    return await api.post(host + urls.postLike, data);
}

async function getLikes(solutionId) {
    return await api.get(host + urls.getSolutionById.replace("{solutionId}", solutionId));
}

async function isLiked(solutionId, userId) {
    return await api.get(host + urls.isLiked.replace("{solutionId}", solutionId).replace("{userId}", userId));
}

export const likeService = {
    like,
    getLikes,
    isLiked
};
