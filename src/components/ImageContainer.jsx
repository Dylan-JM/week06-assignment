export default function ImageContainer({ images, setImgIndex }) {
  function handleClick(id) {
    setImgIndex(id - 1);
  }

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter") {
      console.log("Enter Pressed");
      handleClick(id);
    }
  };

  return (
    <section className="thumbnail-container">
      {images.map((image) => (
        <div key={image.id}>
          <img
            tabIndex={image.id}
            onClick={() => handleClick(image.id)}
            onKeyDown={(event) => handleKeyDown(event, image.id)}
            src={image.url}
            alt={image.alt}
          />
        </div>
      ))}
    </section>
  );
}
