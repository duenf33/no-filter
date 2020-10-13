/******************
 * YOUR CODE HERE *
 ******************/

function onlyOdds(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) {
      result.push(nums[i]);
    }
  }

  return result;
}

function onlyEvens(nums) {
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 1) {
      result.push(nums[i]);
    }
  }

  return result;
}

function shortNamesOnly(namess) {
  const result = [];
  for (let i = 0; i < namess.length; i++) {
    if (namess[i].length < 7) {
      result.push(namess[i]);
    }
  }
  return result;
}

function sNames(names) {
  const result = [];
  for (let i = 0; i < names.length; i++) {
    if (names[i].charAt(0) == 'S') {
      result.push(names[i]);
    }
  }
  return result;
}



/*********************************
 * OUR CODE BELOW; DO NOT TOUCH! *
 *********************************/


if (typeof onlyOdds === 'undefined') {
  onlyOdds = undefined;
}

if (typeof onlyEvens === 'undefined') {
  onlyEvens = undefined;
}

if (typeof shortNamesOnly === 'undefined') {
  shortNamesOnly = undefined;
}

if (typeof sNames === 'undefined') {
  sNames = undefined;
}


module.exports = {
  onlyOdds,
  onlyEvens,
  shortNamesOnly,
  sNames,
}
