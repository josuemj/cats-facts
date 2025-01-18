import { useState } from "react";
import "./App.css";
import { getCat } from "./controller";
function App() {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(false);

  const onClick = async () => {
    setLoading(true);
    const data = await getCat();
    setTimeout(() => {
      setCat(data);
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <div className="cat-container">
        <button onClick={onClick}>get a cat</button>
        {loading ? (
          <>
            <div className="loader"></div>
          </>
        ) : cat ? (
          <>
            <h2>{cat.fact}</h2>
            <img src={cat.image} className="cat-image"></img>
          </>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}

export default App;
