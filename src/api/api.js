const getUser = async (query) => {
    let response = await fetch(`  https://api.github.com/users/${query}`);
    let data = await response.json();

    let [followers, following] = await getFollows(query);

    return {
        id: data.id,
        login: data.login,
        name: data.name,
        avatar: data.avatar_url,
        page: data.html_url,
        createdAt: data.created_at,
        publicRepos: data.publc_repos,
        followers,
        following,
    };
};

const getUserRepos = async (user) => {
    let response = await fetch(
        `https://api.github.com/search/repositories?q=user:${user}+sort:stars&per_page=6`,
    );
    let data = await response.json();

    let repos = data.items.map((repo) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        fork_count: repo.forks_count,
        stargazers_count: repo.stargazers_count,
        topics: repo.topics,
        language: repo.language,
    }));

    return repos;
};

const getFollows = async (user) => {
    let promises = [
        fetch(`https://api.github.com/users/${user}/followers`),
        fetch(`https://api.github.com/users/${user}/following`),
    ];

    let [followers, following] = await Promise.all(promises).then((res) => {
        return Promise.all(res.map((res) => res.json()));
    });

    return [followers.length, following.length];
};

// const getRepoDetails = async (user, repos) => {
//     let promises = [];

//     for (let i = 0; i < repos.length; i++) {
//         promises.push(
//             fetch(`https://api.github.com/repos/${user}/${repos[i]}`),
//         );
//     }

//     let data = await Promise.all(promises).then((responses) => {
//         return Promise.all(responses.map((res) => res.json()));
//     });

//     return data.map((repo) => ({}));
// };

export { getUser, getUserRepos };
