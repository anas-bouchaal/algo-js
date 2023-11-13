function myFilter(arr, func) {
  let filterAdd = [];
  for (i = 0; i < arr.length; i++) {
    if (func(arr[i]) === true) {
      filterAdd.push(func(arr[i]));
    }
  }
  return filterAdd;
}

function myMap(arr, func) {
  let newArr = [];
  for (i = 0; i < arr.length; i++) {
    newArr.push(func(arr[i]));
  }
  return newArr;
}
