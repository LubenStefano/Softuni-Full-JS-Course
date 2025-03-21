import { api } from "../utils/requests.js"
import { userService } from "./userService.js";
const userId = userService.getUserId()
const urls = {
    "furniture": "http://localhost:3030/data/catalog",
    "furnitureById": "http://localhost:3030/data/catalog/",
    "myFurniture": (userId)=> `http://localhost:3030/data/catalog?where=_ownerId%3D%22${userId}%22`,
}
async function getAllFurniture(){
    return await api.get(urls.furniture);
}
async function getFurnitureById(id){
    return await api.get(urls.furnitureById + id);
}
async function getMyFurniture(){
    return await api.get(urls.myFurniture(userId));
}
async function createFurniture(data){
    return await api.post(urls.furniture, data);
}
async function updateFurniture(id, data){
    return await api.put(urls.furnitureById + id, data);
}
async function deleteFurniture(id){
    return await api.remove(urls.furnitureById + id);
}

export const dataService = {
    getAllFurniture,
    getFurnitureById,
    getMyFurniture,
    createFurniture,
    updateFurniture,
    deleteFurniture
}