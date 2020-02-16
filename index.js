const deepsorting = require("deepsorting");

function getUniqueValuesFromTwoArrays(arr1, arr2) {
 
if(!Array.isArray(arr1) || !Array.isArray(arr2))  throw Error("Provided first two argument must be an array")
  //get unique value from both array
  try {
    
  let sortArr1 = deepsorting(arr1); //sort incase of diff index
  let sortArr2 = deepsorting(arr2);

  let arr1Path = sortArr1.map(val => {
    return JSON.stringify(val);
  });
  let arr2Path = sortArr2.map(val => {
    return JSON.stringify(val);
  });

  let afterSort1 = arr1Path.reduce((acc, val) => {
    if (arr2Path.includes(val)) {
      return acc;
    } else {
      return [...acc, JSON.parse(val)];
    }
  }, []);
  let afterSort2 = arr2Path.reduce((acc, val) => {
    if (arr1Path.includes(val)) {
      return acc;
    } else {
      return [...acc, JSON.parse(val)];
    }
  }, []);

  let mergeBoth = afterSort1.concat(afterSort2);

  return mergeBoth; //_.isObject(res) ? true : false; // on false we will have to add current obj in new list

} catch (error) {
    throw Error("some thing went wrong ", error)
}
}

let x = ['a'  , 'c' , {x:"x" , y : "z"} , ['g' ,'h']]
let y = ['a' , 'b' , {x:"x" , y : "y"} , ['g' ,'h']]
let bb = getUniqueValuesFromTwoArrays(x,y)
// let bb = getUniqueValuesFromTwoArrays(['a' , 'b' , 'c'],['b' , 'c' , 'd'])
console.log('cc: ', bb);
module.exports = getUniqueValuesFromTwoArrays;
