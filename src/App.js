import "./App.css";
import Inputs from "./Inputs";
import {useEffect} from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const enableLightMode = () => {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    document.getElementById("darkMode").disabled = false;
    document.getElementById("lightMode").disabled = true;
  };
  const enableDarkMode = () => {
    document.body.classList.remove("light");
    document.body.classList.add("dark");
    document.getElementById("lightMode").disabled = false;
    document.getElementById("darkMode").disabled = true;
  };

  useEffect(() => {
    document.getElementById("darkMode").disabled = true;
  }, []);

  return (
    <>
      <div className="App">
        <button onClick={enableLightMode} id="lightMode">
          <i className="bi bi-brightness-high"></i>
        </button>
        <button onClick={enableDarkMode} id="darkMode">
          <i className="bi bi-brightness-high-fill"></i>
        </button>
      </div>
      <div className="crud">
        <div className="head">
          <h2>crud</h2>
          <p>product management system</p>
        </div>
        <Inputs />
      </div>
    </>
  );
}

export default App;
