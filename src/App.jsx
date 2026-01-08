import { useState, useEffect } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer";

// ! DO NOT PUT ALL CODE IN JUST App.jsx, USE COMPONENTS
// Examples:
// - thumbnail container
// - single image
// - larger image
// - ui buttons (left right up down)

// Start with a wireframe: build react app ui first, then start coding

function App() {
  // state
  // -store api image data
  // current image
  const [images, setImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  // effects
  // - fetch data from the API
  // - once it's fetched, put it in state
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const data = await response.json();
      setImages(data);
    }
    fetchData();
  }, []);
  // functions(events handlers)
  // - when a user clicks an image (update state)
  // - when a user presses a button that should switch the image (left/right, up/down)

  // use props to send api data to a component
  return (
    <>
      <h1>Gallery</h1>
      <div>
        <ImageContainer images={images} setImgIndex={setImgIndex} />
      </div>

      {images.length > 0 && (
        <div>
          <img src={images[imgIndex].url} alt={images[imgIndex].alt} />
        </div>
      )}
    </>
  );
}

export default App;
