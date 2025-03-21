import { api } from "../utils/requests.js"

const host = "http://localhost:3030";
const urls = {
    "dashboardSolutions":"/data/solutions?sortBy=_createdOn%20desc",
    "allSolutions":"/data/solutions",
    "getSolutionById":"/data/solutions/",
}
async function getsolutionsDashboard(){
    return await api.get(host + urls.dashboardSolutions);
}
async function getSolutionById(id){
    return await api.get(host + urls.getSolutionById + id);
}
async function createSolution(data){
    return await api.post(host + urls.allSolutions, data);
}
async function editSolution(id, data){
    return await api.put(host + urls.getSolutionById + id, data);
}
async function deleteSolution(id){
    return await api.remove(host + urls.getSolutionById + id);
}

export const dataService = {
    getsolutionsDashboard,
    createSolution,
    editSolution,
    deleteSolution,
    getSolutionById,
}