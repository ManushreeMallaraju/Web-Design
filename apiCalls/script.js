// promises
// .then()
// async await..

// axios / fetch

const div = document.getElementById('displayData');

const url = 'https://restcountries.com/v2/all';

// NOTE: Step 1:  Always make api calls inside async function and await for the response
async function getAllCountriesFromApi() {

    // Step 2: Make api call .. using await
    const response = await fetch(url);

    // Step 3: convert to json data
    const data = await response.json();

    // Step 4: Print the data fetched
    console.log(data);

    // Step 5: Create element to dispaly in the browser
    let ul = document.createElement('ul');

    // Step 6: 'data' is an array of objects, available inside this 'getAllCountriesFromApi' function only..
    // So using Array.forEach() method to travers through each object in the 'data' array

    data.forEach((country) => {

        // Step 7: Create 'li' element for each country name..
        let li = document.createElement('li');
        li.innerHTML = country.name;

        // Step 8: Append the child 'li' to 'ul'
        ul.appendChild(li);

        // Step 9: Finally append the whole 'ul' list to div element.. 
        div.appendChild(ul);
    })

}

// Calling the function..
getAllCountriesFromApi();

