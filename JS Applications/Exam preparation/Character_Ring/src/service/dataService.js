import { api } from "../utils/requests.js"
import { userService } from "./userService.js";
const userId = userService.getUserId()
const host = "http://localhost:3030";
const urls = {
    "getAllCharacters":"/data/characters?sortBy=_createdOn%20desc",
    "getCharacterById":`/data/characters/`,
    "createCharacter":"/data/characters",
}
async function getAllCharacters(){
    return await api.get(host + urls.getAllCharacters);
}
async function getCharacterById(id){
    return await api.get(host + urls.getCharacterById + id);
}
async function createCharacter(data){
    return await api.post(host + urls.createCharacter, data);
}
async function editCharacter(id, data){
    return await api.put(host + urls.getCharacterById + id, data);
}
async function deleteCharacter(id){
    return await api.remove(host + urls.getCharacterById + id);
}

export const dataService = {
    getAllCharacters,
    getCharacterById,
    createCharacter,
    editCharacter,
    deleteCharacter,
}