import { useState, useEffect } from "react";

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

  // effects
  // - fetch data from the API
  // - once it's fetched, put it in state
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://week-6-api.vercel.app/api/images`);
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
        Thumbnail container, showing all images using .map make sure to use key
        <ul>
          {images.map((image) => (
            <li key={image.id}>{image.title}</li>
          ))}
        </ul>
      </div>

      <div>
        One big image, or a modal that is sometimes there when the user has
        clicked an image. Conditional rendering.
      </div>
    </>
  );
}

export default App;
