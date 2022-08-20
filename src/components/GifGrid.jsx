import { GifCard } from "./GifCard";
import PropTypes from "prop-types";

//import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {



  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {isLoading && <p>Cargando</p>}

      <div className="card-grid">
        {images.map(img => (
            <GifCard key={img.id} {...img}/>
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};