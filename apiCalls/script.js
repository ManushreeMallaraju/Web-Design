// promises
// .then()
// async await..

// axios / fetch

const div = document.getElementById('displayData');

const url = 'https://restcountries.com/v2/all';

async function getAllCountriesFromApi() {

    // await
    const response = await fetch(url);

    const data = await response.json(); // reponse -> 200, 404, 401..

    console.log(data);

    let ul = document.createElement('ul');

    data.forEach((country) => {
        let li = document.createElement('li');
        li.innerHTML = country.name;
        ul.appendChild(li);
        div.appendChild(ul);
    })

}

getAllCountriesFromApi();

