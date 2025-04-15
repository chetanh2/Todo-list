
export const checkedArray = (arr1, arr2) => {
  return arr1.filter((item) => arr2.indexOf(item) !== -1);
};

// Return a new array that contains only items from arr1 that are present in arr2
// This is done by using the filter method, which takes a callback function as an argument
// The callback function is called for each item in arr1 and should return a boolean value
// If the callback function returns true for an item, that item is included in the new array
// If the callback function returns false for an item, that item is excluded from the new array
// The callback function used here is an arrow function that takes an item as an argument
// The arrow function returns the result of calling the indexOf method on arr2
// The indexOf method returns the index of the first occurrence of the specified item in the array
// If the item is not present in the array, indexOf returns -1
// So, the callback function will return true if the item is present in arr2 and false if it is not
// Therefore, the new array will contain only the items from arr1 that are also present in arr2

export const filterArray = (arr1, arr2) => {
  return arr1.filter((item) => arr2.indexOf(item) === -1);
};