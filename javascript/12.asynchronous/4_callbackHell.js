//비동기식 처리 함수를 순차적으로 호출해서 실행하고자 할 때...
function step1(init, callback) {
  //callback자리에는 함수가 와야함
  let result = init + 1;
  callback(result);
}
function step2(init, callback) {
  let result = init + 2;
  callback(result);
}

function step3(init, callback) {
  let result = init + 3;
  callback(result);
}

//step1이 정상적으로 작동이 되야만 step2도 실행이 된다
step1(0, (result1) => {
  console.log(`result1 ==> ${result1}`);

  //step2 함수 호출
  step2(result1, (result2) => {
    console.log(`result2 ==> ${result2}`);

    //step3 함수 호출
    step3(result2, (result3) => {
      console.log(`result3 ==>${result3}`);
    });
  });
});
