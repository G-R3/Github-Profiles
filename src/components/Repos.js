import React from "react";
import { StarIcon, EyeIcon, RepoForkedIcon } from "@primer/octicons-react";

export default function Repos({ repos }) {
    return (
        <div className="grid grid-cols-1 gap-5 my-10 mx-auto px-5 max-w-3xl lg:grid-cols-3 lg:max-w-7xl transition-all">
            {repos.map((repo) => (
                <div
                    key={repo.id}
                    className="bg-slate-50 shadow-md py-3 px-4 flex flex-col gap-2"
                >
                    <div className="flex justify-between items-center">
                        <h2 className="text-lg font-semibold tracking-wide">
                            {repo.name}
                        </h2>
                        <div className="flex gap-5">
                            <span className="flex  items-center gap-1 font-semibold">
                                <RepoForkedIcon />
                                {repo.fork_count}
                            </span>
                            <span className="flex  items-center gap-1 font-semibold">
                                <EyeIcon verticalAlign="middle" />
                                {repo.subscribers_count}
                            </span>
                            <span className="flex  items-center gap-1 font-semibold">
                                <StarIcon verticalAlign="middle" />
                                {repo.stargazers_count}
                            </span>
                        </div>
                    </div>
                    <p>{repo.description}</p>
                    <div className="mt-5 flex gap-2">
                        {repo.topics.map((topic) => (
                            <span className="bg-blue-200 py-1 px-2 rounded-md text-xs text-blue-700">
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
