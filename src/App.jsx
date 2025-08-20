import "./App.css";
import AsideMenu from "./components/AsideMenu";
import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Thumbnail from "./components/Thumbnail";
import useShowHook from "./showHook";

function App() {
  const showAsideMenu = useShowHook();
  const showThumbnail = useShowHook();

  return (
    <>
      <NavBar open={showAsideMenu.open} />
      {showAsideMenu.show === true && <AsideMenu close={showAsideMenu.close} />}
      <Main open={showThumbnail.open} />
      {showThumbnail.show === true && <Thumbnail close={showThumbnail.close} />}
    </>
  );
}

export default App;
