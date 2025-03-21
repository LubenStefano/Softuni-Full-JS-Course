import { api } from "../utils/requests.js"
import { userService } from "./userService.js";
const userId = userService.getUserId()
const host = "http://localhost:3030";
const urls = {
    "x":"x",
    "x":"x",
    "x":"x",
}
async function getAllx(){
    return await api.get(host + urls.x);
}
async function getxById(){
    return await api.get(host + urls.x + id);
}
async function getMyx(){
    return await api.get(host + urls.x(userId));
}
async function createx(data){
    return await api.post(host + urls.x, data);
}
async function updatex(id, data){
    return await api.put(host + urls.x + id, data);
}
async function deletex(id){
    return await api.remove(host + urls.x + id);
}

export const dataService = {
    getAllx,
    getxById,
    getMyx,
    createx,
    updatex,
    deletex
}