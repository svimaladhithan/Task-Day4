// Task 1:

//a. Print odd numbers in an array using anonymous function

/*let b=[];
let a= function(arr)

{
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]%2!==0)
    {
        b.push(arr[i]);
    }
  }
return b;
}
console.log(a([1,2,3,4,5,6,7,8,9,10]));
*/

//a. Print odd numbers in an array using IIFE function

/*let b=[];
(function(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            b.push(arr[i]);
        }
    }
    console.log(b);
})([1,2,3,4,5,6,7,8,9,10])
*/

// b.Convert all the strings to title caps in a string array using anonymous function

/*var a=function (str)
{
    str=str.toLowerCase().split(" ")
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    return str.join(" ");
}
console.log(a("pRactice maKes the man perFect"));
*/

// b.Convert all the strings to title caps in a string array using IIFE function

/*(function(str)
{
    str=str.toLowerCase().split(" ");
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log(str.join(" "));
})("pRactice maKes the man perFect")
*/

// c. Sum of all numbers in an array using anonymous function

/*let sum=0;
let a=function (arr)
{
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;
}
console.log(a([2,3,5,10,12,8,10]))
*/

//c. Sum of all numbers in an array using IIFE function

/*let sum=0;
(function (arr)
{
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    console.log(sum);
})([2,3,5,10,12,8,10]);
*/


//d. Return all the prime numbers in an array using anonymous function

/*var primenumbers=[];
let a=function(arr)
{
for(var i=0;i<arr.length;i++)
{
  var count=0;
  for(var j=2;j<arr[i];j++){
    if(arr[i]%j===0)
    {
      count=1;
    }
  }
    if(count===0)
    {
      primenumbers.push(arr[i])
    }
  }
  return primenumbers;
}
console.log(a([1,3,12,43,31,54,61,67,53]));
*/

//d. Return all the prime numbers in an array using IIFE function

/*var primenumbers=[];
(function (arr)
{
for(var i=0;i<arr.length;i++)
{
  var count=0;
  for(var j=2;j<arr[i];j++){
    if(arr[i]%j===0)
    {
      count=1;
    }
  }
    if(count===0)
    {
      primenumbers.push(arr[i])
    }
  }
  console.log(primenumbers);
})([1,3,12,43,31,54,61,67,53]);
*/

//e. Return all the palindromes in an array using anonymous function

/*let a=function(arr)
{
  var result=[];
  for(var i=0;i<arr.length;i++)
  {
    var data=arr[i].split("").reverse().join("");
    if(data===arr[i]){
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(a(["madam","vimal","liril"]));
*/

//e. Return all the palindromes in an array using IIFE function

/*(function (arr)
{
  var result=[];
  for(var i=0;i<arr.length;i++)
  {
    var data=arr[i].split("").reverse().join("");
    if(data===arr[i]){
      result.push(arr[i]);
    }
  }
  console.log(result);
})(["madam","vimal","liril"]);
*/

//f. Return median of two sorted arrays of the same size using anonymous function.

/*let arr1=[1,3,5,7,9];
let arr2=[2,4,6,8,12];
let k=function(arr1,arr2){
  let arr=[...arr1, ...arr2]
  arr.sort((a,b)=>a-b);
  let n= arr.length;
  if(n%2===0)
  {
    return ((arr[n/2]+Math.floor(arr[n-1]/2))/2);
  } else{
    return arr[Math.floor(n/2)];
  }
}
console.log(k(arr1,arr2));
*/

//f. Return median of two sorted arrays of the same size using IIFE function.

/*let arr1=[1,3,5,7,9];
let arr2=[2,4,6,8,12];
(function (arr1,arr2){
  let arr=[...arr1, ...arr2]
  arr.sort((a,b)=>a-b);
  let n= arr.length;
  if(n%2===0)
  {
    console.log(((arr[n/2]+Math.floor(arr[n-1]/2))/2));
  } else{
    console.log (arr[Math.floor(n/2)]);
  }
})(arr1,arr2);
*/

//g. Remove duplicates from an array using anonymous function

/*var a = [1, 3, 5, 4, 2, 1, 5, 3];
var b=function(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
      if (array.indexOf(arr[i]) === -1) {
          array.push(arr[i]);
      }
  }
  return array;
}
console.log(b(a));
*/

//g. Remove duplicates from an array using IIFE function

/*var a = [1, 3, 5, 4, 2, 1, 5, 3];
(function(arr) {
  var array = [];
  for (var i = 0; i < arr.length; i++) {
      if (array.indexOf(arr[i]) === -1) {
          array.push(arr[i]);
      }
  }
  console.log(array);
})(a);
*/

//h. Rotate an array by k times by anonymous function

/*const arr=[1,2,3,4,5];
const n=4;
var a=function(arr,n){
  for(var i=0;i<n;i++){
    arr.push(arr[i])
  }
  for(var i=0;i<n;i++){
    arr.shift()
  }
  return arr;
}
console.log((a(arr,n)));
*/

//h. Rotate an array by k times by IIFE function

/*const arr=[1,2,3,4,5];
const n=4;
(function(arr,n){
  for(var i=0;i<n;i++){
    arr.push(arr[i])
  }
  for(var i=0;i<n;i++){
    arr.shift()
  }
  console.log(arr);
})(arr,n);
*/

// Task 2

//a. Print odd numbers in an array using arrow function

/*let b=[];
let a= (arr)=>
{
  for(var i=0;i<arr.length;i++)
  {
    if(arr[i]%2!==0)
    {
        b.push(arr[i]);
    }
  }
console.log(b);
}
(a([1,2,3,4,5,6,7,8,9,10]));
*/


// b.Convert all the strings to title caps in a string array using arrow function

/*var a= (str)=>
{
    str=str.toLowerCase().split(" ")
    for(var i=0;i<str.length;i++)
    {
        str[i]=str[i].charAt(0).toUpperCase()+str[i].slice(1);
    }
    console.log(str.join(" "));
}
(a("pRactice maKes the man perFect"));
*/

// c. Sum of all numbers in an array using arrow function

/*let sum=0;
let a= (arr)=>
{
    for(var i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    console.log(sum);
} 
(a([2,3,5,10,12,8,10]))
*/

//d. Return all the prime numbers in an array using arrow function

/*var primenumbers=[];
let a=(arr)=>
{
for(var i=0;i<arr.length;i++)
{
  var count=0;
  for(var j=2;j<arr[i];j++){
    if(arr[i]%j===0)
    {
      count=1;
    }
  }
    if(count===0)
    {
      primenumbers.push(arr[i])
    }
  }
  console.log(primenumbers);
}
(a([1,3,12,43,31,54,61,67,53]));
*/

//e. Return all the palindromes in an array using arrow function

/*let a=(arr)=>
{
  var result=[];
  for(var i=0;i<arr.length;i++)
  {
    var data=arr[i].split("").reverse().join("");
    if(data===arr[i]){
      result.push(arr[i]);
    }
  }
  console.log(result);
}
(a(["madam","vimal","liril"]));
*/