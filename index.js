function loadUser2() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => display(data));
}

function display(data) {
  //   for (const user of data) {
  //     console.log(user.email);}

  const ul = document.getElementById("user-container");
  for (const user of data) {
    console.log(user.name);
    const li = document.createElement("li");
    li.innerText = user.name;
    ul.appendChild(li);
  }
}
