function loadPost() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((data) => displayPost(data));
}

function displayPost(posts) {
  const postsContainer = document.getElementById("posts-container");
  for (const post of posts) {
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");
    postDiv.innerHTML = `
<h4>User ${post.id}</h4>
<h5>Post: Title ${post.title} </h5>
<p>Post Description ${post.body} </p>
    `;
    postsContainer.appendChild(postDiv);
    console.log(post);
  }
}
loadPost();
