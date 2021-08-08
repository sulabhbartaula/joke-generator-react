import { useState, useRef } from "react";
import "./App.css";
import useRandomJoke from "./useRandomJoke";

function App() {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);

  const [firstName, setfirstName] = useState("Sulabh");
  const [lastName, setLastName] = useState("Bartaula");

  const joke = useRandomJoke(firstName, lastName);

  const generateJoke = (e) => {
    e.preventDefault();
    setfirstName(firstNameRef.current.value);
    setLastName(lastNameRef.current.value);
  };

  return (
    <div className="App">
      <h1>Laugh with Sulabh's Joke</h1>
      <h3>{joke}</h3>

      <form onSubmit={generateJoke}>
        <input placeholder="first name" ref={firstNameRef} />
        <input placeholder="last name" ref={lastNameRef} />
        <button type="submit" onClick={generateJoke}>
          Generate Joke
        </button>
      </form>
    </div>
  );
}

export default App;
