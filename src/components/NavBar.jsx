const NavBar = () => {
  return (
    <nav className="navBar">
      <img className="menu-icon" src="./images/icon-menu.svg" alt="menu" />
      <img className="logo" src="./images/logo.svg" alt="sneakers" />
      <section className="links">
        <a>Collections</a>
        <a>Men</a>
        <a>Women</a>
        <a>About</a>
        <a>Contact</a>
      </section>
      <section className="usuario">
        <img className="cart" src="./images/icon-cart.svg" alt="cart" />
        <img className="avatar" src="./images/image-avatar.png" alt="avatar" />
      </section>
    </nav>
  );
};

export default NavBar;
