import { api } from "../utils/requests.js"
import { userService } from "./userService.js";
const userId = userService.getUserId()
const host = "http://localhost:3030";
const urls = {
    "allCars":"/data/cars",
    "getCarById":"/data/cars/",
    "dashboardCars":"/data/cars?sortBy=_createdOn%20desc",
}
async function getAllCars(){
    return await api.get(host + urls.dashboardCars);
}
async function getCarById(id){
    return await api.get(host + urls.getCarById + id);
}
async function createCar(data){
    return await api.post(host + urls.allCars, data);
}
async function editCar(id, data){
    return await api.put(host + urls.getCarById + id, data);
}
async function deleteCar(id){
    return await api.remove(host + urls.getCarById + id);
}

export const dataService = {
    getAllCars,
    getCarById,
    createCar,
    editCar,
    deleteCar
}