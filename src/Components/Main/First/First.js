import React from "react";
import mac from "../../../Resource/images/icons/logo_hero_macbookair__edl9uovq56wm_large.png";
function First() {
  return (
    <section className="first-heghlight-wrapper">
      <div className="word">
        <div className="title-wraper">MacBook Air</div>
        <div className="description-wraper">
          <img src={mac} alt="" />
        </div>
        <div className="price-wrapper">Available starting 7.15</div>

        <div className="links-wrapper">
          <ul>
            <li>
              <a href="">Learn more</a>
            </li>
            <li>
              <a href="">Buy</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default First;
