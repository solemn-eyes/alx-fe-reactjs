import { useState } from "react";

function RegistrationForm() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!username || !email || !password) {
            setError("All fields are required");
            return;
        }

        setError("");   
        // If there's need to reset them
        setUsername("");
        setEmail("");
        setPassword("");

    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {error && <div style={{ color: "red" }}>{error}</div>}
                <input 
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username" 
                />
                <input 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email" 
                />
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password" 
                />
                <button type="submit" className="bg-blue-500 rounded">Register</button>
            </form>
        </div>
    );
};

export default RegistrationForm;