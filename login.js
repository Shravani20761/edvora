document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const pass = document.getElementById('password').value;
  const confirmPass = document.getElementById('confirmPassword').value;

  if (pass !== confirmPass) {
    alert("Passwords do not match!");
    return;
  }

  // Simulate submission (you can connect this to a backend later)
  const name = document.getElementById('name').value;
  alert(`Welcome, ${name}! You have been registered successfully.`);

  // Optionally redirect
  window.location.href = 'dashboard.html'; // Create later
});
