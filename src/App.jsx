import { useState } from "react";
import "./App.css";
import AsideMenu from "./components/AsideMenu";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Thumbnail from "./components/Thumbnail";

function App() {
  const [showAsideMenu, setShowAsideMenu] = useState(false);
  const [showThumbnail, setShowThumbnail] = useState(false);

  const openAsideMenu = () => {
    setShowAsideMenu(true);
  };

  const closeAsideMenu = () => {
    setShowAsideMenu(false);
  };

  const openThumbnail = () => {
    setShowThumbnail(true);
  };

  const closeThumbnail = () => {
    setShowThumbnail(false);
  };
  return (
    <>
      <NavBar open={openAsideMenu} />
      {showAsideMenu === true && <AsideMenu close={closeAsideMenu} />}
      <Main open={openThumbnail} />
      {showThumbnail === true && <Thumbnail close={closeThumbnail} />}
    </>
  );
}

export default App;
