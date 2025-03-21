import { html, render } from '../node_modules/lit-html/lit-html.js';

function lockedProfile() {
renderProfiles();
}

async function renderProfiles() {
const response = await fetch('http://localhost:3030/jsonstore/advanced/profiles');
const data = await response.json();
const profiles = Object.values(data);
console.log(profiles);
profiles.map(profile => {
profileTemplate(profile);
})

const profileTemplate = (profile) => html`
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
const main = document.getElementById('main');
render(profileTemplate, main);
}
