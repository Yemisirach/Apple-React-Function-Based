import $ from "jquery";
import "../../Components/Footer/footer.css";
$(document).on("click", ".footer-links-wrapper h3", function () {
  if ($(window).width() <= 768) {
    $(this).next("ul").slideToggle();
  }
});
