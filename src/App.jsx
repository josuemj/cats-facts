import { useState } from "react";
import "./App.css";
import { getCat } from "./controller";
function App() {
  const [cat, setCat] = useState([]);

    const onClick = async () => {
      const data = await getCat();
      setCat(data)
    };

    return (
      <>
        <div>
          <button onClick={onClick}>get a cat</button>

          {cat ? (
            <>
              <img src={cat.image}></img>
              <p>{cat.fact}</p>
            </>
          ) : (
            <>Click to get a cat</>
          )}
        </div>
      </>
    );
  };


export default App;
