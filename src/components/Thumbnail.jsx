const Thumbnail = () => {
  return (
    <div className="thumbnail">
      <div className="thumbnail-carousel">
        <div className="thumbnail-carousel-images">
          <img src="./images/image-product-1.jpg" alt="sneakers1" />
          <img src="./images/image-product-2.jpg" alt="sneakers2" />
          <img src="./images/image-product-3.jpg" alt="sneakers3" />
          <img src="./images/image-product-4.jpg" alt="sneakers4" />
        </div>
        <div className="thumbnail-carousel-controls">
          <img src="./images/icon-previous.svg" alt="prev" id="prev-btn" />
          <img src="./images/icon-next.svg" alt="next" id="next-btn" />
        </div>
      </div>
      <div className="thumbnail-carousel-images-cards">
        <img src="./images/image-product-1-thumbnail.jpg" alt="card1" />
        <img src="./images/image-product-2-thumbnail.jpg" alt="card2" />
        <img src="./images/image-product-3-thumbnail.jpg" alt="card3" />
        <img src="./images/image-product-4-thumbnail.jpg" alt="card4" />
      </div>
    </div>
  );
};

export default Thumbnail;
