import { canAct } from "./security.js";

const form = document.getElementById("loginForm");

if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    if (!canAct()) {
      alert("Yavaş ol 😄");
      return;
    }

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (!email.includes("@")) {
      alert("Geçersiz e-posta");
      return;
    }

    if (password.length < 8) {
      alert("Şifre en az 8 karakter");
      return;
    }

    // Login logic here
    console.log("Login attempt:", email);
  });
}