import { baseUrl } from '/src/scripts/variables.js'

async function fetchUser(userName) {
    const response = await fetch(`${ baseUrl }/${userName}`);
    return await response.json();
}

export { fetchUser }