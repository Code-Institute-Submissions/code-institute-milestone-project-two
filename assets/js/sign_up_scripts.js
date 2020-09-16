const btn = document.getElementById("button");

// EMAIL.JS FORM
document.getElementById("form").addEventListener("submit", function (event) {
  btn.disabled = true;
  event.preventDefault();

  btn.value = "Sending...";

  const serviceID = "default_service";
  const templateID = "bielefeld";

  emailjs
    .sendForm(serviceID, templateID, this)
    .then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
      },
      (err) => {
        btn.value = "Send Email";
        alert(JSON.stringify(err));
      }
    )
    .finally(() => {
      this.reset();
      btn.disabled = false;
    });
});
