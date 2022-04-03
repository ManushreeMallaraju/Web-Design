
// NOTE: Regular function
// setTimeout(() => {
//     //timeOutDesplay();
// }, 3000)

let myPromiseObj = new Promise(function (myResolve, myReject) {

    // Prouction code - takes ome time
    setTimeout(() => {

        // calls to the consumer code
        myResolve('I promised to return');

    }, 3000)

})

// Must wait until a promise is returned - consuming code
myPromiseObj.then(
    function (value) {
        // What to do once promise is fulfilled - success goes here
        timeOutDesplay(value);
    },
    function (err) {
        console.log(err);
    })

timeOutDesplay = (someValue) => {
    document.getElementById('setTimeoutValue').innerHTML = someValue
}

//timeOutDesplay();