// call by value

let a = 100;
let b = '홍길동';
let c = a;

console.log(a);
console.log(b);
console.log(c);

console.log(a == c); // 두개의 값이 같은지
console.log(a === c); //두개의 값이 같은지 + 데이터 타입이 같은지

// callby reference

let aa = [1, 2, 3];
let bb = '홍길동';
let cc = aa;

console.log(aa);
console.log(bb);
console.log(cc);

console.log(aa == cc);
console.log(aa === cc);
console.log(typeof aa);
console.log(typeof cc);
