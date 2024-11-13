//객체에서 기능을 실행하는 메소드
//메소드는 객체 리터럴 안에 포함됨

const apple = {
  name: '사과',
  color: 'Red',
  emoji: '🍎',

  //display : 사과의 이모지 콘솔에 출력 (-> 값이 아니라, 출력)
  display: function () {
    //함수라고 표현하지 않고 메소드라고 함!
    console.log('🍎');
  },
  getName: function () {
    console.log(this.name); //apple.name과 같은 의미
  },
  getColor: function () {
    console.log(this.color);
  },
  getEmoji: function () {
    console.log(this.emoji);
  },
};
console.log(apple);
apple.getName();
apple.getColor();
apple.getEmoji();
