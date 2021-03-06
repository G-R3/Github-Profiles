import React from "react";

export default function User({ user }) {
    return (
        <div className="px-5 pt-5 flex flex-col items-center">
            <a
                href={user.page}
                target={"_blank"}
                rel="noreferrer"
                className="group"
            >
                <img
                    src={user.avatar}
                    alt={`${user.login} github avatar`}
                    className="rounded-full w-60 shadow-md group-hover:shadow-lg transition-shadow"
                />
            </a>
            <h1 className="text-xl font-semibold mt-2">{user.name}</h1>
            <span>{user.login}</span>
            <span>
                Joined on: {new Date(`${user.createdAt}`).toLocaleDateString()}
            </span>
            <div className="bg-slate-50 p-2 rounded-md flex justify-center items-center gap-3 h-10">
                <span>Followers: {user.followers}</span>
                <div className="bg-black w-px h-full rounded-md"></div>
                <span>Following:{user.following}</span>
            </div>
        </div>
    );
}
