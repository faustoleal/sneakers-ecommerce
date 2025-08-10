const Main = () => {
  return (
    <main>
      <div className="main-responsive">
        <section className="product-images">
          <div className="carousel">
            <div className="carousel-images">
              <img src="./images/image-product-1.jpg" alt="sneakers1" />
              <img src="./images/image-product-2.jpg" alt="sneakers2" />
              <img src="./images/image-product-3.jpg" alt="sneakers3" />
              <img src="./images/image-product-4.jpg" alt="sneakers4" />
            </div>
            <div className="carousel-controls">
              <img src="./images/icon-previous.svg" alt="prev" id="prev" />
              <img src="./images/icon-next.svg" alt="next" id="next" />
            </div>
          </div>
          <div className="carousel-images-cards">
            <img src="./images/image-product-1-thumbnail.jpg" alt="card1" />
            <img src="./images/image-product-2-thumbnail.jpg" alt="card2" />
            <img src="./images/image-product-3-thumbnail.jpg" alt="card3" />
            <img src="./images/image-product-4-thumbnail.jpg" alt="card4" />
          </div>
        </section>

        <section className="product-description">
          <h5>SNEAKER COMPANY</h5>
          <h1>
            Fall Limited Edition
            <br />
            Sneakers
          </h1>
          <p>
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="product-price">
            <span>$125.00</span>
            <span>50%</span>
            <span>$250.00</span>
          </div>
          <div className="add-cart">
            <div>
              <img src="./images/icon-minus.svg" alt="minus" />
              <input
                type="number"
                name="quantity"
                id="quantity"
                placeholder="0"
              />
              <img src="./images/icon-plus.svg" alt="plus" />
            </div>
            <button>
              <img src="./images/icon-cart.svg" alt="cart" />
              <span>Add to cart</span>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Main;
