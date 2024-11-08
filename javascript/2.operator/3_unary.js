//단항 연상자 : ++, --, !, !!
let a = 10;

console.log(++a); // 바로 증가됨 +1 즉 11이 됨
console.log(a++); // 11을 출력한 후 1증가
console.log(a);

let b = 10;
console.log(--b); //9
console.log(b--); //9, 출력한 다음에 -1
console.log(++b); //9
console.log(b++); //9
console.log(b); //10

let flag = true;
console.log(flag);
console.log(!flag);
console.log(!!flag);
