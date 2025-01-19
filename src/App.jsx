import { useEffect, useState } from "react";
import "./App.css";
import { getCat } from "./controller";
function App() {
  const [cat, setCat] = useState([]);
  const [loading, setLoading] = useState(false);
  const [animate, setAnimate] = useState(false);

  const onClick = async () => {
    setLoading(true);
    const data = await getCat();
    setTimeout(() => {
      setCat(data);
      setLoading(false);
      setAnimate(true);
    }, 1250);
  };

  useEffect(() => {
    if (cat.fact) {
      setAnimate(true);
    }
  }, [cat]);

  return (
    <>
      <div className="cat-container">
        <button onClick={onClick} className="get-cat-button" style={ loading ? {opacity: 0} : {}}>Get a cat</button>
        {loading ? (
          <>
            <div className="loader"></div>
          </>
        ) : cat ? (
          <>
            <h2 className={`cat-text ${animate ? "animating" : ""}`}>
              {cat.fact}
            </h2>
            <img
              src={cat.image}
              className={`cat-image ${animate ? "animating" : ""}`}
              style={cat.image == undefined ? { opacity: 0 } : { opacity: 1 }}
            ></img>
          </>
        ) : (
          <>
            <div>si</div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
