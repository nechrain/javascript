
function arrayOfMultiples(num,length) {
     let arr =[];
    for ( i=0 ;i<= length; i++ )  {return arr[i]= num*length}

                                      ***************************

    function positiveSum(arr) {
        var sum = 0;for(var i = 0; i < arr.length; i++)
         {if(arr[i]%2==0) { sum += arr[i];}
                                        } return sum; }
                                       

                                    



                                     *********************************

//Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true
//sol
function UppString(str) {
    return(/[A-Z]/g).test(str)
    
    }

                                    *********************************

//Add the isUpperCase method to String to see whether the string is ALL CAPS. For example:

"c".isUpperCase() == false
"C".isUpperCase() == true
"hello I AM DONALD".isUpperCase() == false
"HELLO I AM DONALD".isUpperCase() == true
"ACSKLDFJSgSKLDFJSKLDFJ".isUpperCase() == false
"ACSKLDFJSGSKLDFJSKLDFJ".isUpperCase() == true

testEven(0)  ->   true 
testEven(0.5) ->  false
                                   *********************************





                                  *********************************

Create a function that returns true if a string contains any spaces.
hasSpaces("hello") ➞ false
hasSpaces("hello, world") ➞ true

//sol
function space(str){
let regex = RegExp(' ');
    return regex.test(str); 
}

                                  *********************************
Write a function named sumEvenNumbers, taking a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.


 sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) ->   30 
//sol

function sumEven(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i]%2==0  ) {
       sum += arr[i];
     }
    }
   return sum;
   }

                                   *********************************

//max vieu -min petit


*/
//sol

     
function maxArr(arr){
    let max=Math.max(...arr)
    let min=Math.min(...arr)
    let diff=max-min
    return [max,min,diff]
    }

*/












