const AsideMenu = ({ close }) => {
  return (
    <aside className="aside-menu">
      <div className="menu">
        <button style={{ textAlign: "start" }}>
          <img src="./images/icon-close.svg" alt="close" onClick={close} />
        </button>
        <br />
        <br />
        <nav>
          <a>Collections</a>
          <a>Men</a>
          <a>Women</a>
          <a>About</a>
          <a>Contact</a>
        </nav>
      </div>
    </aside>
  );
};

export default AsideMenu;
