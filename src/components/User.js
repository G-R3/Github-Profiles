import React from "react";

export default function User({ user }) {
    return (
        <div className="px-5 pt-5">
            <a
                href={user.page}
                target={"_blank"}
                rel="noreferrer"
                className="flex flex-col items-center"
            >
                <img
                    src={user.avatar}
                    alt={`${user.login} github avatar`}
                    className="rounded-full w-60"
                />
                <p className="text-xl font-semibold mt-2">{user.username}</p>
            </a>
        </div>
    );
}
