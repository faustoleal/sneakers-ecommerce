const Cart = ({ product }) => {
  console.log(product);
  return (
    <div className="cart">
      <h3 className="cart-title">Cart</h3>
      <hr />
      <div className="cart-content">
        {!product || product.quantity === 0 ? (
          <p>
            <strong>Your cart is empty</strong>
          </p>
        ) : (
          <>
            <div className="cart-product">
              <img
                className="cart-product-img"
                src={product.image}
                alt={product.name}
              />
              <div>
                <h4>{product.name}</h4>
                {product.price} x {product.quantity}{" "}
                <b>{`$${product.price * product.quantity},00`}</b>
              </div>
              <img
                className="delete-icon"
                src="./images/icon-delete.svg"
                alt="delete"
              />
            </div>
            <button>
              <b>Checkout</b>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
