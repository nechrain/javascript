//exercice 1

function addUp(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
console.log(addUp(7));

//exercice2
let array = [1, 2, 3, 4];
function reverse(array) {
  return array.reverse();
}
console.log(reverse(array));

//exercice 3
let siwar = [1, 2, 3, 4];
function last(array) {
  return siwar[siwar.length - 1];
}
console.log(last(siwar));

//exercice 4
let yosra = [10, 20, 30, 40];
let nessrine = [50, 60, 70];

function conca(yosra, nessrine) {
  return yosra.concat(nessrine);
}
console.log(conca(yosra, nessrine));

//exercice 5 :
let arr = [1, 2, 3, 4];

function pos(arr, item) {
  return arr.indexOf(item);
}
console.log(pos(arr, 0));

//exercice 6:
function Multiply(array) {
  return array.map(function nessrine(x) {
    return x * 2;
  });
}
console.log(Multiply([15, 20, 13]));

//exercice 7:
function longueur(array) {
  return array.map(function zaho(x) {
    return x.length;
  });
}
console.log(longueur(["siwar", "jasser", "yosra"]));

//exercice 8:

function sum(input) {
  if (toString.call(input) !== "[object Array]") return false;

  var total = 0;
  for (var i = 0; i < input.length; i++) {
    if (isNaN(input[i])) {
      continue;
    }
    total += Number(input[i]);
  }
  return total;
}
console.log(sum([8, 9, 10]));

//exercice 9:
var arr = [4, 5, 7, 8, 14, 45, 76];

function even(a) {
  return a.filter(function(val) {
    return val % 2 === 0;
  });
}

alert(even(arr));

//exercice10:
let array = [5, 10, 15, 20, 25];
function findLargestNum(array) {
  return Math.max(...array);
}
console.log(findLargestNum(array));

//exercice 11:
function findSmallerNum(array) {
  return Math.min(...array);
}
console.log(findSmallerNum([5, 10, 50, 200]));

//Exercice 12:

var firstAndLast = function(arr) {
  return [arr[0], arr[arr.length - 1]];
};

console.log(firstAndLast(["nessrine", 05, "siwar", 13]));

//Exercice 13:
var firstAndLast = function(arr) {
  return Math.max(...arr) - Math.min(...arr);
};

console.log(firstAndLast([15, 05, 12, 13]));

//Exercice 14 :
function multipArr(array) {
  return;
  array.map(el => el * array.length);
}
console.log(multipArr([8, 10, 6]));

//Exercice 15:
function multipArr(array) {
  return;
  array.map(el => el * -1);
}
console.log(multipArr([8, 10, 6]));

//Exercice 16:
var arr = ["amira", "amis", "arme"];

function longStr(str) {
  return str.filter(function(string) {
    return string.length == 4;
  });
}

console.log(longStr(arr));

//Exercice 17:
function arrStr(array, str) {
  return;
  array.map(el => el + str);
}
console.log(arrStr(["am", "is", "or"], "er"));

//Exercice 18:
var array = ["a", null, "b", null];

var filtered = array.filter(function(el) {
  return el != null;
});

console.log(filtered);

//Exercice 19:

function treize(a) {
  return a.filter(function(val) {
    return val % 13 !== 0;
  });
}

console.log(treize([5, 26, 10, 39]));
