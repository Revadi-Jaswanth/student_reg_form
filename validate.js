document.getElementById("studentForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value.trim();
  const gender = document.getElementById("gender").value;
  const course = document.getElementById("course").value;
  const mailid = document.getElementById("mailid").value.trim();
  const password = document.getElementById("password").value;

  // Name check
  if (name.length < 3) {
    alert("Name must be at least 3 characters long.");
    event.preventDefault();
    return;
  }

  // Gender check
  if (!gender) {
    alert("Please select a gender.");
    event.preventDefault();
    return;
  }

  // Course check
  if (!course) {
    alert("Please select a course.");
    event.preventDefault();
    return;
  }

  // Email check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(mailid)) {
    alert("Please enter a valid email address.");
    event.preventDefault();
    return;
  }

  // Password check
  if (password.length < 6) {
    alert("Password must be at least 6 characters long.");
    event.preventDefault();
    return;
  }
});
