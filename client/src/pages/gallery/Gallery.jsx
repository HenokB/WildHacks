import "./gallery.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageCard = () => {
  return (
    <div className="galleryCard">
      <img src="https://source.unsplash.com/random?amazon+forest/300x400" width="200" alt="Forest" />
      <p>Amazon Forest</p>
      <span className="ImageComment">Tropical forest</span>
    </div>
  );
};

export default function Gallery() {
  return (
    <>
      <div className="gallery">
        <div className="galleryTitle">
          <span>The Amazon Rainforest</span>
          <span className="line"></span>
        </div>
        <div className="galleryTop">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
        <div className="galleryBottom">
          <ImageCard />
          <ImageCard />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </>
  );
}
