async function editFormHandler(event) {
  event.preventDefault();
  const title = document
    .querySelector('textarea[name="post-title"]')
    .value.trim();
  const content = document
    .querySelector('textarea[name="post-content"]')
    .value.trim();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      title: title,
      content: content,
      id: id,
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

async function deleteFormHandler(event) {
  event.preventDefault();
  const id = window.location.toString().split("/")[
    window.location.toString().split("/").length - 1
  ];
  console.log(id);
  const response = await fetch(`/api/posts/${id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard/");
  } else {
    alert(response.statusText);
  }
}

document.querySelector(".delbtn").addEventListener("click", deleteFormHandler);

document
  .querySelector(".edit-post-form")
  .addEventListener("submit", editFormHandler);
