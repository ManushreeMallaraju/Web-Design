
// promises
// .then()
// async await..

// axios / fetch

const url = 'https://restcountries.com/v2/all';

async function getAllCountriesFromApi() {

    // await
    const response = await fetch(url);

    const data = await response.json(); // reponse -> 200, 404, 401..

    //console.log(response);
    console.log(data);
}

getAllCountriesFromApi();

