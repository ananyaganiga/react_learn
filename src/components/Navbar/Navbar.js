import "./Navbar.css";
import cart from "../../assets/shopping-cart.png";
import wishlist from "../../assets/wishlist.png";

function Navbar() {
  return (
    <div class="navbar2">
      <div class="logo">
        <b>CLOTH</b>STORE
      </div>
      <div class="header-items">
        <span>Home</span>
        <span>Shop</span>
        <span>Features</span>
        <span>Blog</span>
        <span>About</span>
        <span>Contact</span>
      </div>
      <div class="wrap-icon-header">
        <div class="icon-header-cart">
          <img className="cart-icon" src={cart} />
        </div>

        <div class="icon-header-wishlist">
          <img className="wishlist-icon" src={wishlist} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
