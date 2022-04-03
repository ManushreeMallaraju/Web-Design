
// Promisifying

let promiseObj = new Promise((resolve, reject) => {

    // Production code - takes some time... 10sec..
    // setimeout.. API call

    // consumers called..
    resolve('Sending Food..'); // fullfilled promise state

    // rejected..
    reject('err');
})

promiseObj.then(
    // success call
    value => {
        // TODO: 
        console.log('success response: ', value)
        displayMessage(value);
    }
    ,
    //error
    error => console.log(error)
)

function displayMessage(value) {

    console.log('Arranged the party : ', value)
}