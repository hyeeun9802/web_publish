//혼자 연습함 const arr = [1, 2, 3, 4, 5];

arr.push(6);
arr.push(7, 8);

console.log(arr); // 1,2,3,4,5,6,7,8

arr.pop(); // 1,2,3,4,5,6,7
arr.pop(); // 1,2,3,4,5,6
console.log(arr);

arr.shift();
console.log(arr); //2,3,4,5,6

function print(number, index) {
  console.log(`${index} 위치의 요소 : ${number}`);
}
console.log(arr.forEach(print));
