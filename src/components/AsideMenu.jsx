const AsideMenu = () => {
  return (
    <section className="aside-menu">
      <div className="menu">
        <button style={{ textAlign: "start" }}>
          <img src="./images/icon-close.svg" alt="close" />
        </button>
        <br />
        <a>Collections</a>
        <a>Men</a>
        <a>Women</a>
        <a>About</a>
        <a>Contact</a>
      </div>
    </section>
  );
};

export default AsideMenu;
