const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="user avatar">
                <div class="data">
                    <h1>${user.name ?? 'user has no name'}</h1>
                    <p>${user.bio ?? 'user has no bio'}</p>
                </div>
            </div>`;
        let repositoriesItems = '';
        user.repositories.forEach(repo => repositoriesItems += `<li><a href="${repo.html_url}" target="_blank">${repo.name}</a></li>`);

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositorios</h2>
                <ul>${repositoriesItems}</ul>
            </div>
            `;
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuario nao encontrado</h3>";
    }
};

export { screen };