document.getElementById("regForm").addEventListener("submit", function(e) {
    let name = document.getElementById("name").value.trim();
    let age = document.getElementById("age").value;
    let email = document.getElementById("email").value.trim();
    let errorMsg = document.getElementById("errorMsg");

    errorMsg.textContent = "";

    if (name.length < 3) {
        errorMsg.textContent = "Name must be at least 3 characters.";
        e.preventDefault();
    } else if (age < 10 || age > 100) {
        errorMsg.textContent = "Age must be between 10 and 100.";
        e.preventDefault();
    } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
        errorMsg.textContent = "Enter a valid email address.";
        e.preventDefault();
    }
});
