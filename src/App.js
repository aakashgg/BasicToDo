import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import "./styles.css";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [todo, updateTodo] = useState([]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleOnClick = (event) => {
    updateTodo([...todo, inputValue]);
    setInputValue("");
    event.preventDefault();
  };

  const handleDelete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo.splice(index, 1);
    updateTodo(updatedTodo);
  };

  return (
    <div className="App">
      <form>
        <input
          className="input-field"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter To-do Item"
        />
        <button className="submit-button" onClick={handleOnClick}>
          Submit
        </button>
      </form>

      {todo.length === 0 ? (
        <h1>Nothing To Display</h1>
      ) : (
        <ul>
          {todo.map((item, index) => (
            <li key={index}>
              <span>{item}</span>
              <RiDeleteBin6Line
                className="delete-icon"
                onClick={() => handleDelete(index)}
              />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
