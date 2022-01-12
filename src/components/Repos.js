import React from "react";
import { StarIcon, RepoForkedIcon } from "@primer/octicons-react";

export default function Repos({ repos }) {
    return (
        <div className="px-5 my-10 max-w-3xl lg:max-w-7xl mx-auto ">
            <h2 className="text-xl font-semibold mb-3">REPOS</h2>
            <div className="grid grid-cols-1 gap-5 lg:grid-cols-3  transition-all">
                {repos.map((repo) => (
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
                        <div className="mt-auto flex justify-between">
                            <div className="flex gap-2">
                                {repo.topics.map((topic, index) => (
                                    <span
                                        key={index}
                                        className="bg-blue-200 py-1 px-2 rounded-md text-xs text-blue-700"
                                    >
                                        {topic}
                                    </span>
                                ))}
                            </div>
                            <span>{repo.language}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
