//Зробіть функцію, яка параметром прийматиме масив і повертатиме суму його елементів.
const myArray = [1,2,3,4,5,6,7,8,9];
const getArr = (arr) => {
  const sum = 0;  
  for(let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}
const result = getArr(myArray);
console.log(result);
