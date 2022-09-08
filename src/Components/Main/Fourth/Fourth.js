import React from 'react'
import nn from "../../../Resource/images/icons/promo_logo_ws7_hard_knocks__b7y71b7sixw2_medium.png";
function Fourth() {
  return (
   <section className="fourth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
                  <img src={nn } />
							</div>
						</div>
						<div className="description-wraper">
							The most durable<br/>
							Apple Watch ever..
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Watch the filim</a></li>
							</ul>
						</div>
					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="title-wraper ">
							iPhone 13
						</div>
						<div className="description-wraper">
							Oh.So.Pro.
						</div>
						<div className="links-wrapper white">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
}

export default Fourth