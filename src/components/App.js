import { useState, useEffect } from "react";
import User from "./User";
import Repos from "./Repos";
import { getUser, getUserRepos } from "../api/api";

function App() {
    const [user, setUser] = useState("");
    const [repos, setRepos] = useState("");
    const [query, setQuery] = useState("");
    const [input, setInput] = useState("");

    useEffect(() => {
        if (!query) return;
        getUser(query).then((user) => setUser(user));
        getUserRepos(query).then((repos) => setRepos(repos));
    }, [query]);

    function handleSubmit(evt) {
        evt.preventDefault();
        setQuery(input);
        setInput("");
    }
    return (
        <div className="App">
            <form action="" onSubmit={handleSubmit}>
                <input
                    type="search"
                    name="search"
                    id="search"
                    value={input}
                    onChange={(evt) => setInput(evt.target.value)}
                    className="border-2 border-rose-400"
                />
                <button className="bg-neutral-800 text-white p-2">
                    Search
                </button>
            </form>

            {user && repos ? (
                <>
                    <User user={user} />
                    <Repos repos={repos} />
                </>
            ) : (
                <p className="text-slate-400 text-xl text-center">
                    Search for User
                </p>
            )}
        </div>
    );
}

export default App;
