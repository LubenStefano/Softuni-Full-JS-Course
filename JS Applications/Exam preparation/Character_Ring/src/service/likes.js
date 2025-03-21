import { api } from "../utils/requests.js";

const host = "http://localhost:3030";
const urls = {
  postLike: "/data/useful",
  getLikesPerUser: (characterId, userId) => 
    `/data/useful?where=characterId%3D%22${characterId}%22%20and%20_ownerId%3D%22${userId}%22&count`,
  getLikesById: (characterId) => 
    `/data/useful?where=characterId%3D%22${characterId}%22&distinct=_ownerId&count`
};

async function postLike(data) {
  return await api.post(host + urls.postLike, data);
}

async function getLikesById(characterId) {
  return await api.get(host + urls.getLikesById(characterId));
}

async function userLiked(characterId, userId) {
  return await api.get(host + urls.getLikesPerUser(characterId, userId));
}

export const likeService = {
  postLike,
  getLikesById,
  userLiked
};
