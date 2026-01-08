export default function ImageContainer({ images, setImgIndex }) {
  return (
    <div className="film-inner">
      {images.map((image, index) => (
        <div
          key={image.id}
          className="film-frame"
          style={{ backgroundImage: `url(${image.urls.small})` }}
          onClick={() => setImgIndex(index)}
          onKeyDown={(e) => e.key === "Enter" && setImgIndex(index)}
          tabIndex={0}
        />
      ))}
    </div>
  );
}
