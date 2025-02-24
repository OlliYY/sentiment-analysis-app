import { useState } from "react";

function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState(null);

  const analyzeSentiment = async () => {
    const response = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    const data = await response.json();
    setResult(data.sentiment);
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Sentiment Analysis</h1>
      <textarea
        rows="4"
        cols="50"
        placeholder="Enter text here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button onClick={analyzeSentiment} style={{ marginTop: "10px" }}>
        Analyze Sentiment
      </button>
      {result !== null && (
      <h2>Sentiment: {result === 1 ? "Positive 😊" : "Negative 😠"}</h2>
      )}
    </div>
  );
}

export default App;
