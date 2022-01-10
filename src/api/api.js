const getUser = async (query) => {
    let response = await fetch(`  https://api.github.com/users/${query}`);
    let data = await response.json();

    return {
        id: data.id,
        username: data.login,
        avatar: data.avatar_url,
        page: data.html_url,
    };
};

const getUserRepos = async (user) => {
    let response = await fetch(`https://api.github.com/users/${user}/repos`);
    let data = await response.json();

    let repos = data.map((repo) => repo.name);

    return getRepoDetails(user, repos);
};

const getRepoDetails = async (user, repos) => {
    let promises = [];

    for (let i = 0; i < repos.length; i++) {
        promises.push(
            fetch(`https://api.github.com/repos/${user}/${repos[i]}`),
        );
    }

    let data = await Promise.all(promises).then((responses) => {
        return Promise.all(responses.map((res) => res.json()));
    });

    return data.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        fork_count: repo.forks_count,
        stargazers_count: repo.stargazers_count,
        subscribers_count: repo.subscribers_count,
        topics: repo.topics,
    }));
};

export { getUser, getUserRepos };
