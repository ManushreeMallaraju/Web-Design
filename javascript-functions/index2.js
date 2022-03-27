
// function callAfterThreeSeconds() {
//     const time = 3;
//     console.log(`Called after : ${time} seconds`);
// }

//callAfterThreeSeconds();

// setTimeout( callback function , delay) // takes in two arguments

setTimeout(function () {
    const time = 3;
    console.log(`Called after : ${time} seconds`);
}, 3000);