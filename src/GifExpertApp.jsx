import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState(['One Punch', 'Rick and Morty']);
  console.log(categories);

  const addCategory = () => {
    setCategories([...categories, "category"]);
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory />
      <button onClick={addCategory}>Agregar Categoría</button>

      <ol>
        {categories.map(category => (
          <li key={category}>{category}</li>
        ))}
      </ol>
    </>
  );
};
