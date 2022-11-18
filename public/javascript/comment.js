async function commentFormHandler(event) {
  event.preventDefault();

  const commentText = document
    .querySelector('textarea[name="comment-body"]')
    .value.trim();
  const post_id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const userID = document
    .querySelector(".comment-form")
    .getAttribute("data-userID");
  console.log(commentText, post_id, userID);
  if (commentText) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id: post_id,
        user_id: userID, //how to pass userId info
        comment_text: commentText,
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
}

document
  .querySelector(".comment-form")
  .addEventListener("submit", commentFormHandler);
