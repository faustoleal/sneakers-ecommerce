import { useState } from "react";

const Carousel = ({ array, nombre, open }) => {
  const [image, setImage] = useState(1);

  const prev = () => {
    if (image === 1) {
      setImage(4);
    } else {
      setImage(image - 1);
    }
  };

  const next = () => {
    if (image === 4) {
      setImage(1);
    } else {
      setImage(image + 1);
    }
  };

  return (
    <>
      <div className={`${nombre}`}>
        <div className={`${nombre}-images`} onClick={open}>
          <img
            src={`./images/image-product-${image}.jpg`}
            alt={`sneakers${image}`}
          />
        </div>
        <div className={`${nombre}-controls`}>
          <img
            src="./images/icon-previous.svg"
            alt="prev"
            id={`${nombre}-prev-btn`}
            onClick={prev}
          />
          <img
            src="./images/icon-next.svg"
            alt="next"
            id={`${nombre}-next-btn`}
            onClick={next}
          />
        </div>
      </div>
      <div className={`${nombre}-images-cards`}>
        {array.map((item, i) => (
          <img
            key={i}
            className={image === i + 1 ? "active" : ""}
            src={`./images/image-product-${i + 1}-thumbnail.jpg`}
            alt={item}
            onClick={() => setImage(i + 1)}
          />
        ))}
      </div>
    </>
  );
};

export default Carousel;
