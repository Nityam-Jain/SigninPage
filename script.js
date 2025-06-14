document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form");
 
 const dateInput = document.getElementById("dos");
  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute("max", today);

  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");

  togglePassword.addEventListener("click", () => {
    passwordInput.type = "text";
    togglePassword.className = "ri-eye-line";

    setTimeout(() => {
      passwordInput.type = "password";
      togglePassword.className = "ri-eye-off-line";
    }, 1000); 
  });


  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const firstName = form.querySelector("input[name='firstName']").value.trim();
    const lastName = form.querySelector("input[name='lastName']").value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const password = passwordInput.value.trim();
    const mobile = form.querySelector("input[name='mobile']").value.trim();
    const dos = dateInput.value;
    const remember = form.querySelector("input[type='checkbox']").checked;

    const today = new Date().toISOString().split('T')[0];
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const mobilePattern = /^\d{10,}$/;

    if (firstName.length < 2 || firstName.length > 10) {
      alert("First name must be between 2 and 10 characters.");
      return;
    }

    if (lastName.length < 2 || lastName.length > 10) {
      alert("Last name must be between 2 and 10 characters.");
      return;
    }

    if (!emailPattern.test(email)) {
      alert("Email must be a valid Gmail address (e.g., name@gmail.com).");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters.");
      return;
    }

    if (!mobilePattern.test(mobile)) {
      alert("Mobile number must be at least 10 digits.");
      return;
    }

    if (!dos || dos > today) {
      alert("Date must be today or a past date.");
      return;
    }

    if (!remember) {
      alert("Please check 'Remember me' before submitting.");
      return;
    }

    
    alert("Form submitted successfully!");

    
    form.reset();
  });
});
