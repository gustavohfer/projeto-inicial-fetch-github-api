import { fetchUser } from "/src/scripts/services/user.js";
import { fetchUserRepos } from "/src/scripts/services/repositories.js";
import { user } from "/src/scripts/objects/user.js";
import { screen } from "/src/scripts/objects/screen.js";

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
        return
    }

    const reposResponse = await fetchUserRepos(userName);

    user.setInfo(userResponse);
    user.setRepositories(reposResponse);
    console.log(user);


    screen.renderUser(user);
}