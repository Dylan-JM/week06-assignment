import { useState, useEffect } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer";

// - ui buttons (left right up down)

function App() {
  const [images, setImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const apiURL = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    async function fetchData() {
      const response = await fetch(`${apiURL}?client_id=${apiKey}`);
      const data = await response.json();
      setImages(data);
    }
    fetchData();
  }, []);

  const handleKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      setImgIndex(imgIndex + 1);
      if (imgIndex >= images.length - 1) setImgIndex(0);
    }
    if (event.key === "ArrowUp") {
      setImgIndex(imgIndex - 1);
      if (imgIndex == 0) {
        setImgIndex(images.length - 1);
      }
    }
  };

  return (
    <>
      <div tabIndex={0} onKeyDown={(event) => handleKeyDown(event)}>
        <div>
          <ImageContainer images={images} setImgIndex={setImgIndex} />
        </div>

        {images.length > 0 && (
          <div>
            <img
              src={images[imgIndex].urls.regular}
              alt={images[imgIndex].alt_description}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
