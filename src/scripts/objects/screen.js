const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `
            <div class="info">
                <img src="${user.avatarUrl}" alt="user avatar">
                <div class="data">
                    <h1>${user.name ?? 'user has no name'}</h1>
                    <p>${user.bio ?? 'user has no bio'}</p>
                    <br>
                    <p>Seguidores: <strong>${user.followers}</strong></p>
                    <p>Seguindo: <strong>${user.following}</strong></p>
                </div>
            </div>`;

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `
            <div class="repositories section">
                <h2>Repositorios</h2>
                <ul>${user.repositories.map(repo => {
                    return `
                    <li>
                        <a href="${repo.html_url}" target="_blank">
                            <h3>${ repo.name.length > 19 ? repo.name.substring(0, 19) + '...' : repo.name }</h3>
                            <div>
                                <span class="repo-info">
                                    🍴 ${repo.forks_count}
                                </span>
                                <span class="repo-info">
                                    ⭐ ${repo.stargazers_count}
                                </span>
                                <span class="repo-info">
                                    👀 ${repo.watchers_count}
                                </span>
                                <span class="repo-info">
                                    🌄 ${repo.language ?? '-'}
                                </span>
                            </div>
                        </a>
                    </li>`;
                }).join('')}
                </ul>
            </div>
            `;
        }

        if (user.events.length > 0) {
            this.userProfile.innerHTML += `
            <div class="events section">
                <h2>Eventos</h2>
                <ul>${user.events.map(event => {
                return `
                    <li>
                        <h3>${event.repo.name}</h3>
                        <p>${event.type === 'PushEvent' ? event.payload.commits[0].message : "Sem mensagem de commit"}</p>
                    </li>`;
                }).join('')}
                </ul>
            </div>`;
        }

    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuario nao encontrado</h3>";
    }
};

export { screen };