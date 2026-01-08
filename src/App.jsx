import { useState, useEffect } from "react";
import "./App.css";
import ImageContainer from "./components/ImageContainer";

// - ui buttons (left right up down)

function App() {
  const [images, setImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(import.meta.env.VITE_API_URL);
      const data = await response.json();
      setImages(data);
    }
    fetchData();
  }, []);
  // - when a user presses a button that should switch the image (left/right, up/down)

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
          <ImageContainer
            images={images}
            imgIndex={imgIndex}
            setImgIndex={setImgIndex}
          />
        </div>

        {images.length > 0 && (
          <div>
            <img src={images[imgIndex].url} alt={images[imgIndex].alt} />
          </div>
        )}
      </div>
    </>
  );
}

export default App;
