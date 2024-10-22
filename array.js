let arr1 = ["Cecile", "Lone"];

 let arr2 = ["Emil", "Tobias", "Linus"];

 let joinedArr = arr1.concat(arr2);

 console.log("Joined array:", joinedArr);



 let fruits = ["Grapes", "Banana", "Apple", "Mango"];

 fruits.push("Ponkan");

 console.log("Fruits array after push:", fruits);



 let array1 = [1, 2, 3];

  array1.unshift(4, 5);

 console.log("Array1 after unshift:", array1);



 fruits.pop();

 console.log("Fruits array after pop:", fruits);



let array2 = [1, 2, 3];

array2.shift();

 console.log("Array2 after shift:", array2);



 fruits.sort();

 console.log( "Fruits array sorted alphabetically:", fruits);



 let slicedFruits = fruits.slice(1, 3);
 console.log("Sliced fruits:");
 
 let months = [ "January", "March", "May"];

 months.splice(1, 0, "February");

// Insert "February" after "January"

 months.splice(2, 2); // Remove "March" and "May"

 console.log("Months array after splice:", months);
