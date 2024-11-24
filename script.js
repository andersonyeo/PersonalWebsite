document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  const response = document.getElementById("formResponse");

  if (name && email && message) {
    response.innerText = `Thank you, ${name}! Your message has been sent.`;
    response.style.color = "green";
    this.reset(); // Reset form
  } else {
    response.innerText = "Please fill out all fields.";
    response.style.color = "red";
  }
});
