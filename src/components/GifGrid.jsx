import { useEffect, useState } from "react";
import { GifCard } from "./GifCard";

//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {



  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Loading...</p>}

      <div className="card-grid">
        {images.map(img => (
            <GifCard key={img.id} {...img}/>
        ))}
      </div>
    </>
  );
};
