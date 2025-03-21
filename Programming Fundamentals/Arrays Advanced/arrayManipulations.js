function arrayManipulation(arr) {
    let array = arr.shift().split(' ').map(Number);
    for (let i = 0; i < arr.length; i++) {
        let [command, first, second] = arr[i].split(' ');
        first = Number(first);
        second = Number(second);
        if (command === 'Add') {
            array.push(first);
        } else if (command === 'Remove') {
            array = array.filter(el => el !== first);
        } else if (command === 'RemoveAt') {
            array.splice(first, 1);
        } else if (command === 'Insert') {
            array.splice(second, 0, first);
        }
    }
    console.log(array.join(' '));
}
arrayManipulation(['4 19 2 53 6 43', 'Add 3', 'Remove 2', 'RemoveAt 1', 'Insert 8 3'] );
/*This JavaScript code is performing different operations on an array based on 
commands given in the form of strings. The array and commands are assumed to be contained
in the arr variable.The first line of the code is taking the first element of arr, splitting
it into separate elements based on spaces, and then converting each element to a number.
This is done using the shift(), split(), and map() methods respectively. The shift() method 
removes the first element from an array and returns it. The split() method divides a string into 
an array of substrings. The map() method creates a new array with the results of calling a provided 
function on every element in the array. In this case, the provided function is Number, which converts 
a string to a number.The for loop then iterates over the remaining elements in arr. Each element is 
expected to be a string containing a command and one or two numbers, separated by spaces. 
The split() method is used again to divide each string into an array of substrings. 
The command and numbers are then extracted using array destructuring.
The if and else if statements inside the loop perform different operations on the array based 
on the command. If the command is 'Add', the push() method is used to add the first number to the 
end of the array. If the command is 'Remove', the filter() method is used to create a new array that 
does not include the first number. If the command is 'RemoveAt', the splice() method is used to remove 
the element at the index specified by the first number. If the command is 'Insert', the splice() method 
is used again to insert the first number at the index specified by the second number.*/