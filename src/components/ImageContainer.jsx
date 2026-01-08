export default function ImageContainer({ images, setImgIndex }) {
  function handleClick(index) {
    setImgIndex(index);
  }

  return (
    <section className="thumbnail-container">
      {images.map((image, index) => (
        <div key={image.id}>
          <img
            onClick={() => handleClick(index)}
            onKeyDown={(event) => {
              if (event.key === "Enter") handleClick(index);
            }}
            src={image.urls.small}
            alt={image.alt_description}
            tabIndex={0}
          />
        </div>
      ))}
    </section>
  );
}
