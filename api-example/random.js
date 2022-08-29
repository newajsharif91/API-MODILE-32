const random = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((data) => displayUser(data.results));
};
const displayUser = (users) => {
  console.log(users);
  const randomPeople = document.getElementById("random-people");
  console.log(randomPeople);
  for (const user of users) {
    const userDiv = document.createElement("div");
    userDiv.innerText = `
    <h3>User Name: ${user.id.name}</h3>
    <p>User email: ${user.email} </p>
    <p>User Location: ${user.location.city} </p>
    
    `;
    randomPeople.appendChild(userDiv);
  }
};

random();
