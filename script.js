(function () {
  "use strict";

  var forms = document.querySelectorAll(".needs-validation");

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

// const name = document.querySelector(".register_name").value;
const btnSubmit = document.querySelector(".btn-primary");

btnSubmit.addEventListener("click", () => {
  const name = document.getElementsById("validationCustom01").value;
  console.log(name);
});
