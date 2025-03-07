import { useState } from "react";
import axios from "axios";

function App() {
  const [joke, setJoke] = useState("");
  const [loading, setLoading] = useState(false); // To show loading state

  const fetchJoke = () => {
    setLoading(true); // Show loading state
    axios
      .get("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
      })
      .then((response) => {
        setJoke(response.data.joke);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching joke:", error);
        setLoading(false);
      });
  };

  return (
    <div>
      <h1>Dad Joke Generator 🤣</h1>
      <button onClick={fetchJoke} disabled={loading}>
        {loading ? "Loading..." : "Get Joke"}
      </button>
      <p>{joke}</p>
    </div>
  );
}

export default App
