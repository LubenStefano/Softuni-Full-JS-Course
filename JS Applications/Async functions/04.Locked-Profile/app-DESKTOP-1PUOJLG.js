import { api } from "./requests.js";
import { html, render } from "./node_modules/lit-html/lit-html.js"; 

async function lockedProfile() {
const data = await getProfiles();
const profiles = Object.values(data);
renderProfiles(profiles);
}
function renderProfiles(profiles) {
    console.log(profiles);
    const main = document.getElementById('main');
    const template = () => html`
                <div class="profile">
                    <img src="./iconProfile2.png" class="userIcon" />
                    <label>Lock</label>
                    <input type="radio" name="user1Locked" value="lock" checked>
                    <label>Unlock</label>
                    <input type="radio" name="user1Locked" value="unlock"><br>
                    <hr>
                    <label>Username</label>
                    <input type="text" name="user1Username" value="" disabled readonly />
                    <div class="user1Username">
                        <hr>
                        <label>Email:</label>
                        <input type="email" name="user1Email" value="" disabled readonly />
                        <label>Age:</label>
                        <input type="text" name="user1Age" value="" disabled readonly />
                    </div>
                    
                    <button>Show more</button>
                </div>
    `
    render(result, main);
}
async function getProfiles(){
    const profiles = api.get('http://localhost:3030/jsonstore/advanced/profiles')
    return profiles;
} 