import React from "react";
import "bootstrap/dist/js/bootstrap";
import logo from "../../Resource/images/icons/logo-sm.png";
import search from "../../Resource/images/icons/search-icon-sm.png";
import carts from "../../Resource/images/icons/cart-sm.png";
function Nav() {
  return (
    <div className="nav-wrapper fixed-top">
      <div className="container">
        <nav className="navbar navbar-toggleable-sm navbar-expand-md">
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target=".navbar-collapse"
          >
            ☰
          </button>
          <a className="navbar-brand mx-auto" href="https://www.apple.com/">
            <img src={logo} />
          </a>

          <div className="navbar-collapse collapse">
            <ul className="navbar-nav nav-justified w-100 nav-fill">
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/store"
                >
                  Store
                </a>
              </li>
              v
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/mac/"
                >
                  Mac
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/ipad/"
                >
                  ipad
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/iphone/"
                >
                  iphone
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/watch/"
                >
                  watch
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/airpods/"
                >
                  AirPods
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/tv-home/"
                >
                  TV & Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/services/"
                >
                  Only on Apple
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://www.apple.com/shop/accessories/all"
                >
                  Accessories
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link js-scroll-trigger"
                  href="https://support.apple.com/"
                >
                  Support
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll-trigger" href="/search/">
                  <img src={search} />
                </a>
              </li>
            </ul>
          </div>

          <a className="" href="/cart/">
            <img src={carts} />
          </a>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
