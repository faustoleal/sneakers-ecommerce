import { useState } from "react";
import "./App.css";
import AsideMenu from "./components/AsideMenu";
import Cart from "./components/Cart";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Thumbnail from "./components/Thumbnail";
import useShowHook from "./showHook";

function App() {
  const showAsideMenu = useShowHook();
  const showThumbnail = useShowHook();
  const [toggleCart, setToggleCart] = useState(false);
  const [cartItems, setCartItems] = useState(null);

  const mostrarCart = () => {
    setToggleCart((prev) => !prev);
  };

  return (
    <>
      <NavBar open={showAsideMenu.open} mostrarCart={mostrarCart} />
      {toggleCart === true && <Cart product={cartItems} />}
      {showAsideMenu.show === true && <AsideMenu close={showAsideMenu.close} />}
      <Main open={showThumbnail.open} setCartItems={setCartItems} />
      {showThumbnail.show === true && <Thumbnail close={showThumbnail.close} />}
    </>
  );
}

export default App;
