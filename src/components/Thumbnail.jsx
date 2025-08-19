import Carousel from "./Carousel";

const thumbnailCards = ["card1", "card2", "card3", "card4"];

const Thumbnail = ({ close }) => {
  return (
    <div className="thumbnail-container">
      <section className="thumbnail">
        <img
          className="close-btn"
          src="./images/icon-close.svg"
          alt="close-btn"
          onClick={close}
        />
        <Carousel array={thumbnailCards} nombre="thumbnail-carousel" />
      </section>
    </div>
  );
};

export default Thumbnail;
