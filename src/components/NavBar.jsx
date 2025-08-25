const NavBar = ({ open }) => {
  return (
    <header className="navBar">
      <img
        className="menu-icon"
        src="./images/icon-menu.svg"
        alt="menu"
        onClick={open}
      />
      <img className="logo" src="./images/logo.svg" alt="sneakers" />
      <nav className="links">
        <a>Collections</a>
        <a>Men</a>
        <a>Women</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
      <section className="usuario">
        <img className="cart-icon" src="./images/icon-cart.svg" alt="cart" />
        <img className="avatar" src="./images/image-avatar.png" alt="avatar" />
      </section>
    </header>
  );
};

export default NavBar;
