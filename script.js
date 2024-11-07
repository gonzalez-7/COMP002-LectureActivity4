// Step 1: Instantiate a new array and add 5 numeric values to it
let myArray = [10, 20, 30, 40, 50];

// Step 2: Output the first and last values of the array
console.log('First value:', myArray[0]);
console.log('Last value:', myArray[myArray.length - 1]);

// Step 3: Output each value in the array using a for loop
for (let i = 0; i < myArray.length; i++) {
    console.log('Array value at index', i, ':', myArray[i]);
}

// Step 4: Use the push() method to add 5 more values
myArray.push(60, 70, 80, 90, 100);

// Output the contents of the array after push
console.log('Array after pushing 5 more values:', myArray);

// Step 5: Use the pop() method 3 times
myArray.pop();  // Removes 100
myArray.pop();  // Removes 90
myArray.pop();  // Removes 80


