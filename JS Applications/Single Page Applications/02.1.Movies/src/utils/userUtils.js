import { userService } from "../service/userService.js";
import { api } from "./requests.js";

const urls = {
    "register": "http://localhost:3030/users/register",
    "login": "http://localhost:3030/users/login",
    "logout": "http://localhost:3030/users/logout",
}

async function register(data){
const user = await api.post(urls.register, data);
userService.setUser(user);
}

async function login(data){
    const user = await api.post(urls.login, data);
    userService.setUser(user);
}

async function logout(){
    await api.get(urls.logout);
    userService.removeUser();
}

export const userUtils = {
    register,
    login,
    logout
}