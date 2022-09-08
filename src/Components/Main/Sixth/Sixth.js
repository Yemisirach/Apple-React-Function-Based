import React from 'react'
import pl from "../../../Resource/images/icons/logo_promo_katy_perry__bb5nun6svbsi_large.png";
import apple from "../../../Resource/images/icons/apple-card-logo.png";
function Sixth() {
  return (
   <section className="sixth-heghlight-wrapper">
		<div className="container-fluid">
			<div className="row">
				<div className="left-side-wrapper col-sm-12 col-md-6">
					<div className="left-side-container">
						<div className="title-wrapper">
							<img src={apple} alt="logo"/>
						</div>
						<div className="description-wraper">
							Get up to 3% Daily Cash back <br/>with every purchese.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="https://www.apple.com/apple-card/">Lear more</a></li>
								<li><a href="">Buy</a></li>
							</ul>
						</div>


					</div>
				</div>
				<div className="right-side-wrapper col-sm-12 col-md-6">
					<div className="right-side-container">
						<div className="logo-wrapper">
                <img src={pl } />
						</div>
						<div className="description-wraper">
							New Artist Spotlight workouts<br />with music by arty Perry.
						</div>
						<div className="links-wrapper">
							<ul>
								<li><a href="">See what's new</a></li>
								<li><a href="">Tty it free &sup2;</a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  );
}

export default Sixth