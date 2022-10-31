export function ui() {
    return console.log("ayyyyyyy");
}

// export { ui };


//exporting a function

// export function squareNumber(x) {
//     return x * x;
// }

//exporting a variable 
// export const pi = 3.14;

//Cách khác để export:

//exporting a function
function squareNumber(x) {
    return x * x;
}

//exporting a variable 
const pi = 3.14;
export { squareNumber, pi }; 