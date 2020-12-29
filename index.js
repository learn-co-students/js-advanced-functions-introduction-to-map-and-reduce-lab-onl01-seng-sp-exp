// mapToNegativize returns an array with all values made negative
// like return sourceArray.map(el => el * -1)
function mapToNegativize(sourceArray) {
  let newArr = [];
  sourceArray.forEach(el => newArr.push(-el));
  return newArr;
}

// mapToNoChange returns an array with the original values
// like return sourceArray.map(el => el);
function mapToNoChange(sourceArray) {
  return sourceArray;
} 

// mapToDouble returns an array with the original values multiplied by 2
// like return sourceArray.map(el => el * 2)
function mapToDouble(sourceArray) {
  let newArr = [];
  sourceArray.forEach(el => newArr.push(el * 2));
  return newArr;
}

// mapToSquare returns an array with the original values squared
// like return sourceArray.map(el => el ** 2)
function mapToSquare(sourceArray) {
  let newArr = [];
  sourceArray.forEach(el => newArr.push(el ** 2));
  return newArr;
}

// reduceToTotal returns a running total when not given a starting point
// reduceToTotal returns a running total when given a starting point
// like return sourceArray.reduce(function(total, el){ return el + total, startingPoint)
function reduceToTotal(sourceArray, startingPoint = 0) {
  let total = startingPoint;
  sourceArray.forEach(el => total += el);
  return total;
}

// reduceToAllTrue returns true when all values are truthy
// reduceToAllTrue returns false when any value is falsy
// like return sourceArray.every(el => !!el)
function reduceToAllTrue(sourceArray) {
  let truthy = true; 
  sourceArray.forEach(el => {
    !!el ? undefined : truthy = false; 
  })
  return truthy;
}
     
// reduceToAnyTrue returns true when a true value is present
// reduceToAnyTrue returns false when no true value is present
// like return sourceArray.some(el => !!el)
function reduceToAnyTrue(sourceArray) {
  let truthy = false;
  sourceArray.forEach(el => {
    !!el ? truthy = true : undefined;
  })
  return truthy;
}