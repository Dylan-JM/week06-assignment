import { useState, useEffect } from "react";
import "./App.css";
import "./components/FilmReel.css";
import ImageContainer from "./components/ImageContainer";
import SearchBar from "./components/SearchBar";

// - ui buttons (left right up down)

function App() {
  const [images, setImages] = useState([]);
  const [imgIndex, setImgIndex] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const apiURL = import.meta.env.VITE_API_URL;
    const apiKey = import.meta.env.VITE_API_KEY;
    async function fetchData() {
      if (inputValue.trim() === "") {
        const response = await fetch(`${apiURL}?client_id=${apiKey}`);
        const data = await response.json();
        setImages(data);
        setImgIndex(0);
        return;
      }

      const response = await fetch(
        `https://api.unsplash.com/search/photos?query=${inputValue}&client_id=${apiKey}`
      );
      const data = await response.json();
      setImages(data.results);
      setImgIndex(0);
    }
    fetchData();
  }, [inputValue]);

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
      <div
        tabIndex={0}
        onKeyDown={(event) => handleKeyDown(event)}
        className="h-screen flex flex-col overflow-hidden"
      >
        <div className="w-full flex justify-center">
          <SearchBar setInputValue={setInputValue} />
        </div>

        {images[imgIndex] && (
          <div className="viewer-row">
            <div className="center-area">
              <img
                src={images[imgIndex].urls.regular}
                alt={images[imgIndex].alt_description}
              />
            </div>

            <div className="reel-area">
              <ImageContainer images={images} setImgIndex={setImgIndex} />
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
