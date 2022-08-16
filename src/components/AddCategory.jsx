import { useState } from "react";

export const AddCategory = () => {
  const [inputValue, setInputValue] = useState("one punch");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
    }

  return (
    <form onSubmit={event => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifs"
        onChange={handleInputChange}
      />
    </form>
  );
};
