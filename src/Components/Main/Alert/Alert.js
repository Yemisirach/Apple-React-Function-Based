import React from 'react'
import un from "../../../Resource/images/icons/unicef_logo_dark__ejvlglygb3ee_small.png";
function Alert() {
  return (
   <section className="add-container top-50">
		<div className="add-logo">
        <img src={un } />
		</div>
		<div className="add-word">
			<a href="#">Donate to Support families affected by the war in Ukraine</a>
		</div>
	</section>
  );
}

export default Alert