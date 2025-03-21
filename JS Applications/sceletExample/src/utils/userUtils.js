import { userService } from "../service/userService.js";
import { api } from "./requests.js";

const host = "http://localhost:3030";
const urls = {
    "register": "/users/register",
    "login": "/users/login",
    "logout": "/users/logout",
}

async function register(data){
const user = await api.post(host + urls.register, data);
userService.setUser(user);
}

async function login(data){
    const user = await api.post(host + urls.login, data);
    userService.setUser(user);
}

async function logout(){
    await api.get(host + urls.logout);
    userService.removeUser();
}

export const userUtils = {
    register,
    login,
    logout
}