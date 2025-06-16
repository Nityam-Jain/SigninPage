document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector("form");

  const firstNameInput = form.querySelector("input[name='firstName']");
  const lastNameInput = form.querySelector("input[name='lastName']");
  const dateInput = document.getElementById("dos");
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  const mobileInput = form.querySelector("input[name='mobile']");

  const today = new Date().toISOString().split('T')[0];
  dateInput.setAttribute("max", today);

  // Pass Eye 
  togglePassword.addEventListener("click", () => {
    passwordInput.type = "text";
    togglePassword.className = "ri-eye-line";

    setTimeout(() => {
      passwordInput.type = "password";
      togglePassword.className = "ri-eye-off-line";
    }, 1000);
  });

  // Mobile only allow num digit
  mobileInput.addEventListener("input", function () {
    this.value = this.value.replace(/\D/g, ""); 
  });

  // Time + Max Length validation
  let firstNameTimer, lastNameTimer;

  firstNameInput.addEventListener("input", () => {
    clearTimeout(firstNameTimer);
    firstNameTimer = setTimeout(() => {
      const value = firstNameInput.value.trim();
      if (value.length > 0 && value.length < 2) {
        alert("First name must be at least 2 characters.");
      } else if (value.length > 10) {
        alert("First name must not exceed 10 characters.");
      }
    }, 3000);
  });

  lastNameInput.addEventListener("input", () => {
    clearTimeout(lastNameTimer);
    lastNameTimer = setTimeout(() => {
      const value = lastNameInput.value.trim();
      if (value.length > 0 && value.length < 2) {
        alert("Last name must be at least 2 characters.");
      } else if (value.length > 10) {
        alert("Last name must not exceed 10 characters.");
      }
    }, 3000);
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    const email = form.querySelector("input[name='email']").value.trim();
    const password = passwordInput.value.trim();
    const mobile = mobileInput.value.trim();
    const dos = dateInput.value;
    const remember = form.querySelector("input[type='checkbox']").checked;

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
