import { api } from "../utils/requests.js"

const host = "http://localhost:3030";
const urls = {
    "getAllTattoos":"/data/tattoos?sortBy=_createdOn%20desc",
    "allTattoos":"/data/tattoos",
    "getTattooById":"/data/tattoos/",
}
async function getAllTattoos(){
    return await api.get(host + urls.getAllTattoos);
}
async function getTattooById(id){
    return await api.get(host + urls.getTattooById + id);
}
async function createTattoo(data){
    return await api.post(host + urls.allTattoos, data);
}
async function editTattoo(id, data){
    return await api.put(host + urls.getTattooById + id, data);
}
async function deleteTattoo(id){
    return await api.remove(host + urls.getTattooById + id);
}

export const dataService = {
    getAllTattoos,
    getTattooById,
    createTattoo,
    editTattoo,
    deleteTattoo,
}