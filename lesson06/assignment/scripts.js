
function validateForm() {
  const userName = document.forms["contactForm"]["username"].value;
  const email = document.forms["contactForm"]["email"].value;
  const messageTextarea = document.forms["contactForm"]["messageTextarea"].value;
}

  if (userName == "") {
    alert("Please enter your name.");
    return false;
  } else if (email == "") {
    alert("Please enter your email.");
    return false;
  } else if (messageTextarea.value == "") {
    alert("Please enter a message.");
    return false;
  }
  else alert("Thank you, we'll contact you soon!");
}
