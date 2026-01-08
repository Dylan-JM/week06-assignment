export default function ImageContainer({ images, imgIndex, setImgIndex }) {
  function handleClick(id) {
    setImgIndex(id - 1);
  }

  return (
    <section className="thumbnail-container">
      {images.map((image) => (
        <div key={image.id}>
          <img onClick={() => handleClick(image.id)} src={image.url} />
        </div>
      ))}
    </section>
  );
}
