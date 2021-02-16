const URLify = (str) => {
    return str.trim().replace(/\s/g, "%20");
  };
  // O(n) linear because the longer the string, the longer it will take. 
  console.log(URLify("tauhida parveen"));
  console.log(URLify("www.thinkful.com /tauh ida parv een"));

  const filterArray = (arr) => {
    const length = arr.length;
    for (let i = 0; i < length; i++) {
      const item = arr.shift();
      if (item >= 5) arr.push(item);
    }
    return arr;
  };
  
  console.log(filterArray([1, 2, 3, 4, 5, 6]));
  // O(n) linear: again the longer the array, the more we have to loop through and check.

  const maxSum = (arr) => {

  };
  //stuck on this one. I don't understand the idea of finding a "max sum"

  const mergeArrays = (arr1, arr2) => {
    let newArr = [...arr1, ...arr2];
    return newArr.sort((a, b) => a - b);
  };
  console.log(mergeArrays([1, 3, 6, 8, 11], [2, 3, 5, 8, 9, 10]));
  // O(n) linear: the sort method makes this linear since the longer the array, the longer it will take

  const removeChar = (string, chars) => {
  };
  //  I'm floundering on this one!!! 
    console.log(removeChar("Battle of the Vowels: Hawaii vs. Grozny", "aeiou"));

  const products = (arr) => {
    let products = [];
    let temp;
    for (let i = 0; i < arr.length; i++) {
      let tempArray = arr.filter((j) => j !== arr[i]);
      temp = tempArray.reduce((acc, cur) => acc * cur);
      products.push(temp);
    }
    return products;
  };
  console.log(products([1, 3, 9, 4]));

  //I looked up the answer to this one because I am still trying to understand
  //columns and rows, but I understand how it works! 
  let twoD = [
    [1, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [1, 1, 1, 1, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
  ];
  const TwoDArr = (array) => {
    const rows = [];
    const columns = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i].includes(0)) rows.push(i);
    }
    for (let num in rows) {
      for (let j = 0; j < array[num].length; j++) {
        if (array[num][j] === 0 && !columns.includes(0)) {
          columns.push(j);
        }
      }
    }
    for (let y = 0; y < array.length; y++) {
      for (let x = 0; x < array[y].length; x++) {
        if (columns.includes(x) || rows.includes(y)) {
          array[y][x] = 0;
        }
      }
    }
    return array;
  };
  console.log(TwoDArr(twoD));

  //polynomial O(n^k)  because of all the nested loops! 

  const strRotation = (str1, str2) => {
    for (let i = 0; i < str2.length; i++) {
      str2 = str2.slice(1) + str2[0];
      if (str1 === str2) {
        return true;
      }
    }
    return false;
  };
  console.log(strRotation("amazon", "azonma"));
  console.log(strRotation("amazon", "azonam"));
  //0(n) linear: you are looping through string 2 and slicing it at 
  //different points to see if it matches string 1. Depending on 
  //the length of string 2, it will take more time the longer it is.  