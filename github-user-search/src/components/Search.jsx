import { useState } from "react";
import { advancedUserSearch } from "../services/githubService";


function Search() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [location, setLocation] = useState("");
    const [minRepos, setMinRepos] = useState("");
    const [results, setResulst] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setUser(null);

        try {
            const users = await advancedUserSearch({ username, location, minRepos });
            setResulst(users);

        }catch (error) {
            setError("Looks like we cant find the user");
            setError("Failed to fetch results.");
        }finally {
            setLoading(false);
        }

    };

    return (
        <div className="search-container" style={{ textAlign: "center" }}>
            <h1 className="text-2xl font-bold text-center mb-4">Advanced GitHub search</h1>
            <form onSubmit={handleSubmit} className="space-y-3">
                <input type="text"
                placeholder="Search GitHub user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                 />
                
                <input 
                type="text"
                className="w-full p-2 border rounded"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                />

                <input 
                type="number"
                className="w-full p-2 border rounded"
                placeholder="Minimum public repos "
                value={minRepos}
                onChange={(e) => setMinRepos(e.target.value)}
                />
                
                <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Search</button>
            </form>

            <div style={{ marginTop: "2rem" }}>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
                
                {results.length > 0 && (
                    <ul className="mt-4 space-y-4">
                        {results.map((user) => (
                            <li key={user.login} className="p-4 border rounded shadow">
                                <div className="flex items-center space-x-4">
                                    <img src={user.avatar_url} alt="avatar" className="w-16 h-16 rounded-full" />
                                    <div>
                                        <h2 className="text-lg font-bold">{user.login}</h2>
                                        <a href={user.html_url} target="_blank" rel="noopener noreferrer" className="text-blue-500">View Profile</a>
                                        {user.details && (
                                            <p className="text-sm text-gray-600">
                                                {user.details.location || "Unknown"} | {user.details.public_repos} repos
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
                {user && (
                    <div>
                        <img src={user.avatar_url} alt={user.login} width="100" />
                        <h3>{user.name || user.login}</h3>
                        <p>
                            <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                                View Profile
                            </a>
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Search;