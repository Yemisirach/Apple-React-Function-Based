import React from 'react'
import lo from "../../../Resource/images/icons/logo_promo_mbp13__gnmug5nsag66_medium.png";
import pl from "../../../Resource/images/icons/promo_logo_ipadair__frwnnsqveeye_medium.png";
function Fifth() {
  return (
<section className="fifth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="title-wraper ">
							iPhone 13"
						</div>
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
                  <img src={lo} />
							</div>
						</div>

						<div className="links-wrapper">
							<ul>
								<li><a href="">Learn more</a></li>
								<li><a href="">Buy</a></li>
							</ul>
					</div>
            </div>
            </div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="top-logo-wrapper">
							<div className="logo-wrapper">
                    <img src={pl } />
							</div>
						</div>
						<div className="description-wraper">
							Light. Bright. Full of might.
						</div>
						<div className="links-wrapper">
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

export default Fifth