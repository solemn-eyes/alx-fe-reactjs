import { useState, useEffect} from "react"

const Homepage = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("./src/data.json")
            .then(response => response.json())
            .then(data => setData(data))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <div>
            <h1>Homepage</h1>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            
        </div>
    );
}

export default Homepage;