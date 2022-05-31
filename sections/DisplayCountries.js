function displayCountries() {
  fetch(europeCountries)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const countryContainer = document.querySelector(".container");

      data.forEach((country) => {
        const flag = getFlagIcon(country.altSpellings[0]);
        // console.log(flag);
        const name = country.name.common;
        const capital = country.capital[0];
        const population = getPopulationNumber(country.population);
        const currency = getCurrency(country.currencies);
        // console.log(currency);

        countryContainer.innerHTML += `
        <div class="country-wrapper">
          <div class="country">
            <img src="${flag}" alt=""/>
            <h3>${name}</h3>
            <h4>Capital: ${capital}</h4>
            <p>Population: ${population} inhabitants</p>
            <p>Currency: ${currency}</p>
          </div>
        </div>
        `;
      });
    });
}
