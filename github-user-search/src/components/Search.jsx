import { useState } from "react";
import { fetchUserData } from "../services/githubService";


function Search() {
    const [username, setUsername] = useState("");
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setUser(null);

        try {
            const data = await fetchUserData(username);
            setUser(data);

        }catch (error) {
            setError("Looks like we cant find the user");
        }finally {
            setLoading(false);
        }

    };

    return (
        <div className="search-container" style={{ textAlign: "center" }}>
            <form onSubmit={handleSubmit}>
                <input type="text"
                placeholder="Search GitHub user"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                 />
                <button type="submit">Search</button>
            </form>

            <div style={{ marginTop: "2rem" }}>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: "red" }}>{error}</p>}
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