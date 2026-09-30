document.addEventListener("DOMContentLoaded", function () {

  const form = document.getElementById("contactForm");
  const success = document.getElementById("success");
  const button = document.getElementById("sendMessageButton");

  if (!form || !success || !button) {
    return;
  }

  form.addEventListener("submit", async function (event) {

    event.preventDefault();

    button.disabled = true;
    button.textContent = "Sending...";

    success.innerHTML = "";

    try {

      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          "Accept": "application/json"
        }
      });

      const data = await response.json();

      if (response.ok) {

        success.innerHTML =
          '<div class="alert alert-success">' +
          'Message sent successfully. Thank you for your message!' +
          '</div>';

        form.reset();

      } else {

        success.innerHTML =
          '<div class="alert alert-danger">' +
          (data.message || "Something went wrong. Please try again later.") +
          '</div>';

      }

    } catch (error) {

      success.innerHTML =
        '<div class="alert alert-danger">' +
        'Unable to send your message. Please try again later.' +
        '</div>';

    }

    button.disabled = false;
    button.textContent = "Send";

  });

});