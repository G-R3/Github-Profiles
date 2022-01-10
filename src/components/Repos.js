import React from "react";

export default function Repos({ repos }) {
    return (
        <div>
            {repos.map((repo) => (
                <div key={repo.id}>
                    <span>{repo.name}</span>
                    <p>{repo.description}</p>
                    <p>{repo.fork_count}</p>
                    <p>{repo.subscribers_count}</p>
                    <p>{repo.topics}</p>
                </div>
            ))}
        </div>
    );
}
