async function signupFormHandler(event) {
  event.preventDefault();

  const username = document
    .querySelector("#username-input-signup")
    .value.trim();
  const password = document
    .querySelector("#password-input-signup")
    .value.trim();

  if (username && password) {
    const response = await fetch("/api/users", {
      method: "post",
      body: JSON.stringify({
        username,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then(function () {
        document.location.replace("/dashboard");
      })
      .catch((err) => console.log(err));
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
