import { useState, useEffect } from "react";
import { SearchIcon } from "@primer/octicons-react";
import User from "./User";
import Repos from "./Repos";
import { getUser, getUserRepos } from "../api/api";

function App() {
    const [user, setUser] = useState("");
    const [repos, setRepos] = useState("");
    const [query, setQuery] = useState("");
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        if (!query) return;
        const fetchData = async () => {
            let user = await getUser(query);
            let repos = await getUserRepos(query);
            setUser(user);
            setRepos(repos);
            setIsLoading(false);
        };

        setIsLoading(true);
        fetchData();
    }, [query]);

    function handleSubmit(evt) {
        evt.preventDefault();
        setQuery(input);
        setInput("");
    }

    let display = (
        <p className="text-slate-500 text-xl text-center font-semibold">
            Search for User
        </p>
    );

    if (isLoading) {
        display = (
            <p className="text-slate-500 text-xl text-center font-semibold">
                Loading...
            </p>
        );
    } else if (user && repos) {
        display = (
            <div>
                <User user={user} />
                <Repos repos={repos} />
            </div>
        );
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit} className="flex justify-end p-5">
                <div className="flex">
                    <input
                        type="search"
                        name="search"
                        id="search"
                        value={input}
                        onChange={(evt) => setInput(evt.target.value)}
                        className="border-2 p-2 rounded-l-md rounded-bl-md"
                    />
                    <button
                        className="bg-neutral-800 px-2 text-white rounded-tr-md rounded-br-md flex
                    items-center"
                    >
                        <SearchIcon />
                    </button>
                </div>
            </form>
            {display}
        </div>
    );
}

export default App;
