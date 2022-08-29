const loadKanye = () => {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => displayKanye(data));
};

loadKanye();

const displayKanye = (quets) => {
  const blockquets = document.getElementById("quets");
  console.log(quets);
  blockquets.innerText = quets.quote;
};
