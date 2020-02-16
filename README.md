# GetUniqueElementFromArray
Source code on npm module


# About 


It accepts two arrays no matter how much nested arrays or objects in it,
it will return unique values from it 


# Installation

`npm i unique_values_from_two_arrays --save`


Then... 
`Lets consider that we have two simple arrays`
```
let getUniqueValuesFromTwoArrays = require("unique_values_from_two_arrays")
let x = ['a' , 'b' , 'c']
let y = ['b' , 'c' , 'd']
 getUniqueValuesFromTwoArrays(x,y)


//output

// [ 'a', 'd' ]

```

Then...
`Now lets say we have arrays with deeply nested arrays and objects in it`

let x = ['a'  , 'c' , {x:"x" , y : "z"} , ['g' ,'h']]
let y = ['a' , 'b' , {x:"x" , y : "y"} , ['g' ,'h']]
getUniqueValuesFromTwoArrays(x,y)

//output [ { x: 'x', y: 'z' }, 'c', { x: 'x', y: 'y' }, 'b' ]
