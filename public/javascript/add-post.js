async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value.trim();
  const userID = document
    .querySelector(".new-post-form")
    .getAttribute("data-postuserID");
  const content = document
    .querySelector('input[name="post-content"]')
    .value.trim();

  const response = await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      title: title,
      content: content,
      user_id: userID,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
