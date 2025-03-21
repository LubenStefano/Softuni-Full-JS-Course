import {api} from '../utils/requester.js';

async function getAllItems() {
    return await api.get("http://localhost:3030/jsonstore/collections/myboard/posts");
}
async function createItem(data) {
    return await api.post("http://localhost:3030/jsonstore/collections/myboard/posts", data);
}
async function getOneItem(id) {
    return await api.get(`http://localhost:3030/jsonstore/collections/myboard/posts/${id}`);
}
async function getComments(id) {
    return await api.get(`http://localhost:3030/jsonstore/collections/myboard/comments/?query={"postId":"${id}"}`);
}
async function createComment(id, data) {
    return await api.post(`http://localhost:3030/jsonstore/collections/myboard/comments/?query={"postId":"${id}"}`, data);
}
export const dataService = {
    getAllItems,
    createItem,
    getOneItem,
    getComments,
    createComment
};