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

    let repos = data.map((repo) => ({
        id: repo.id,
        name: repo.name,
        url: repo.html_url,
        stargazer_count: repo.stargazers_count,
        watchers_count: repo.watchers_count,
        topics: repo.topics,
    }));

    return repos;
};

export { getUser, getUserRepos };
