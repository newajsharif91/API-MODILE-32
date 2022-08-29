const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((responsive) => responsive.json())
    .then((data) => displayCountries(data));
};
const displayCountries = (countries) => {
  //   for (const country of countries) {
  //     console.log(country);
  //   }

  const couintriesContainer = document.getElementById("couintries-container");
  countries.forEach((country) => {
    console.log(country);
    const countryDiv = document.createElement("div");
    countryDiv.classList.add("country");
    countryDiv.innerHTML = `
    <h3>Name: ${country.name.common} </h3>
    <button onclick="loadCountryDetails(' $(country.cca2)' )" >Details</button>
    `;
    couintriesContainer.appendChild(countryDiv);
  });
};

const loadCountryDetails = (code) => {
  const url = `https://restcountries.com/v3.1/alpha${code}`;
  console.log(url);
  fetch(url)
    .then((response) => response.json)
    .then((data) => console.log(data[0]));
};

loadCountries();
