import { useEffect, useState } from "react";

function Hi() {
  useEffect(() => {
    console.log("I'm rendered!");
    return () => {
      console.log("I'm gone!");
    };
  }, []);
  return <h1>Hi</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  return (
    <div>
      <h1>My App</h1>
      {showing ? <Hi /> : null}
      <button onClick={() => setShowing(!showing)}>
        {showing ? "Hide" : "Show"}
      </button>
    </div>
  );
}

export default App;
