async function newFormHandler(event) {
  event.preventDefault();

  const title = document
    .querySelector('textarea[name="post-title"]')
    .value.trim();
  // const userID = document
  //   .querySelector(".new-post-form")
  //   .getAttribute("data-postuserID");
  const content = document
    .querySelector('textarea[name="post-content"]')
    .value.trim();
  if (!title || !content) {
    alert("Please input both title and content!");
  } else {
    const response = await fetch(`/api/posts`, {
      method: "POST",
      body: JSON.stringify({
        title: title,
        content: content,
        //user_id: userID,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
}

document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);
