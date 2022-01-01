// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

$(".numerator").click(function () {
  let increment = $(this).prev(".productAmount");
  let decrement = $(this).next(".productAmount");
  let shipping = parseInt( $("#shipping").text() );
  let vintagePrice = parseFloat("54.99");
  let leviPrice = parseFloat("74.99");

  if ($(this).hasClass("plus")) {
    let num = parseInt(increment.text());
    num++;
    increment.text(num);
  } 
  else if ( $(this).hasClass("minus") && !($(this).next(".productAmount").text() === "1") ) {
    let num = parseInt(decrement.text());
    num--;
    decrement.text(num);
  }

  let bagPrice = parseFloat( $(".bagAmount").text() ) * vintagePrice;
  bagPrice = bagPrice.toFixed(2);
  $(".vintage").text(bagPrice);

  let shoePrice = parseFloat( $(".shoesAmount").text() ) * leviPrice;
  shoePrice = shoePrice.toFixed(2);
  $(".levi").text(shoePrice);

  let total = parseFloat(bagPrice) + parseFloat(shoePrice) + shipping;
  total = total.toFixed(2);
  $("#totalPrice").text(total);

});
