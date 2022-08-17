import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifCard } from "./GifCard";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);
  const [counter, setCounter] = useState(10);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    }

  useEffect(() => {
    getImages();
    console.log(images);
  }, []);

  return (
    <>
      <h3>{category}</h3>
      <h4>{counter}</h4>
      <button onClick={()=> setCounter(counter+1)}>+1</button>

      <div className="card-grid">
        {images.map(img => (
            <GifCard key={img.id} {...img}/>
        ))}
      </div>
    </>
  );
};
