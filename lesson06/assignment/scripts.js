<script>
    function validateForm() {
        var name = document.forms["contactForm"]["Name"];
        var email = document.forms["contactForm"]["EMail"];
        var address = document.forms["contactForm"]["Address"];

        if (name.value == "") {
            window.alert("Please enter your first name.");
            name.focus();
            return false;
        }
				if (email.value == "") {
						window.alert("Please enter a valid e-mail address.");
						email.focus();
						return false;
				}
				if (phone.value == "") {
						window.alert("Please enter your telephone number.");
						phone.focus();
						return false;
				}

				return true;
	     }
