var colors = ["Violet", "Indigo", "Blue", "Green", "Yellow"];  
      
// destructuring assignment  
var [a,b,...args] = colors;  

var moreColors = ["Black", "White", ...colors];

console.log(a);          //output : violet  
console.log(b);          //output : Indigo
console.log(args);       //output : [ 'Blue', 'Green', 'Yellow' ]
console.log(moreColors); //output : [ 'Black', 'White', 'Violet', 'Indigo', 'Blue', 'Green', 'Yellow' ]