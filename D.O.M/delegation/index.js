const container = document.getElementById("messages");

container.addEventListener("click", function (event) {
  // check if clicked element has data-close
  if (event.target.dataset.close !== undefined) {
    // find the message parent
    const message = event.target.closest(".message");

    // remove it
    if (message) {
      message.remove();
    }
  }
});