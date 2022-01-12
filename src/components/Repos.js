import React from "react";
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react";
import { useEffect, useState } from "react/cjs/react.development";

export default function Repos({ repos }) {
    const [filter, setFilter] = useState("stars");
    const [sortedRepos, setSortedRepos] = useState(repos);

    useEffect(() => {
        const sortRepos = [...repos].sort((a, b) => {
            // this will also include repos the user forked. the solution would be to filter them
            if (filter === "forks") {
                return b.fork_count - a.fork_count;
            }
            return b.stargazers_count - a.stargazers_count;
        });

        setSortedRepos(sortRepos);
    }, [filter, repos]);

    return (
        <div className="px-5 my-10 max-w-3xl lg:max-w-7xl mx-auto ">
            <div className="flex gap-3 mb-3">
                <h2 className="text-xl font-semibold">Repos</h2>
                <select
                    name="filter"
                    id="filter"
                    value={filter}
                    onChange={(evt) => setFilter(evt.target.value)}
                >
                    <option value="stars">Stars</option>
                    <option value="forks">Forks</option>
                </select>
            </div>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3  transition-all">
                {sortedRepos.slice(0, 6).map((repo) => (
                    <div
                        key={repo.id}
                        className="bg-slate-50 shadow-md py-3 px-4 flex flex-col gap-2"
                    >
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold tracking-wide">
                                {repo.name}
                            </h3>
                            <div className="flex gap-5">
                                <span className="flex justify-center items-center gap-1 font-semibold relative group">
                                    <RepoForkedIcon />
                                    {repo.fork_count}
                                    <span className="text-sm bottom-7 absolute w-max scale-0 group-hover:scale-100 transition-transform tracking-wide bg-slate-100 p-2 rounded-md track-wide">
                                        Forks
                                    </span>
                                </span>
                                <span className="flex justify-center items-center gap-1 font-semibold relative group">
                                    <StarIcon verticalAlign="middle" />
                                    {repo.stargazers_count}
                                    <span className="text-sm bottom-7 absolute w-max scale-0 group-hover:scale-100 transition-transform tracking-wide bg-slate-100 p-2 rounded-md track-wide">
                                        Stars
                                    </span>
                                </span>
                            </div>
                        </div>
                        <p className="mb-5">{repo.description}</p>
                        <div className="mt-auto flex flex-col gap-5">
                            <span className="text-sm">{repo.language}</span>
                            <div className="flex flex-wrap gap-2">
                                {repo.topics.map((topic, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-200 py-1 px-2 rounded-md text-xs text-blue-700"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
