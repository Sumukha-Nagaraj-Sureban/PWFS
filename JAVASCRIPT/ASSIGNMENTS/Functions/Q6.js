function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            // If all arguments are provided, execute the original function
            return func(...args);
        } else {
            // If not all arguments are provided, return a new curried function
            return function(...moreArgs) {
                return curried(...args, ...moreArgs);
            };
        }
    };
}

function addTwoNumbers(x, y) {
    return x + y;
}

const curriedAdd = curry(addTwoNumbers);

const result1 = curriedAdd(5)(3); 
console.log("Result 1:", result1);

const result2 = curriedAdd(2, 4); 
console.log("Result 2:", result2);
