const a = 0;

function f1() {
    console.log('function returned from showMessage();')
};

// function definition/body 
function showMessage(funct) { // parameters
    // let sum = 10 + param1;
    console.log('Message from normal function ');

    funct(); //callback function...

    return 'Value returned from normal function'
}

const returenedSum = showMessage(f1); // arguments

console.log('Inside regular func: ', returenedSum);

//E6+ arrow functions, higher order functions(map, filter, reduce), let const :

// let 
// const 
// var


showMessageWithArrow = arg1 => arg1;

// let sum = 10;
// console.log('Message from arrow function :' + arg1);



const result = showMessageWithArrow('Hello');
console.log(result);




