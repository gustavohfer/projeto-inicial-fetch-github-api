import { fetchUser } from "./services/user.js";
import { fetchUserRepos } from "./services/repositories.js";
import { fetchUserEvents } from "./services/events.js";
import { user } from "./objects/user.js";
import { screen } from "./objects/screen.js";

document.getElementById('btn-search').addEventListener('click', () => {
    const userName = document.getElementById('input-search').value;

    if (checkEmptyInput(userName)) return;
    getUserData(userName);
});

document.getElementById('input-search').addEventListener('keyup', (e) => {
    const userName = e.target.value;
    const key = e.witch || e.keyCode;
    const isEnter = key === 13;

    if (isEnter) {
        if (checkEmptyInput(userName)) return;
        getUserData(userName);
    }
});

function checkEmptyInput(userName) {
    if (userName.length === 0) {
        alert('preencha o usuario');
        return true;
    }
}

async function getUserData(userName) {

    const userResponse = await fetchUser(userName);
    if (userResponse.message === "Not Found") {
        screen.renderNotFound();
        return;
    }

    const reposResponse = await fetchUserRepos(userName);
    const eventsResponse = await fetchUserEvents(userName);

    user.setInfo(userResponse);
    user.setRepositories(reposResponse);
    user.setEvents(eventsResponse);

    console.log(reposResponse);
    
    screen.renderUser(user);
}