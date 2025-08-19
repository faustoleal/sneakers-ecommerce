import Carousel from "./Carousel";

const carouselSneakers = ["sneakers1", "sneakers2", "sneakers3", "sneakers4"];

const Main = ({ open }) => {
  return (
    <main>
      <div className="main-responsive">
        <section className="product-images">
          <Carousel array={carouselSneakers} nombre="carousel" open={open} />
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
              <span>0</span>
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
