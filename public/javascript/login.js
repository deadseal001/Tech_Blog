const loginFormHandler = async function (event) {
  event.preventDefault();
  console.log("loginform handler working");
  const usernameEl = document.querySelector("#username-input-login");
  const passwordEl = document.querySelector("#password-input-login");
  fetch("/api/users/login", {
    method: "post",
    body: JSON.stringify({
      username: usernameEl.value.trim(),
      password: passwordEl.value.trim(),
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then(function () {
      document.location.replace("/dashboard");
    })
    .catch((err) => console.log(err));
};

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
