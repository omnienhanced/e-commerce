document.getElementById("signup-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (users.find(u => u.email === email)) {
    showMessage("User already exists!");
    return;
  }

  users.push({ name, email, password });
  localStorage.setItem("users", JSON.stringify(users));
  showMessage("Signup successful! You can now log in.");
});

document.getElementById("login-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    showMessage(`Welcome, ${user.name}! Redirecting...`);
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1500);
  } else {
    showMessage("Invalid email or password.");
  }
});

function showMessage(msg) {
  document.getElementById("auth-message").textContent = msg;
}
