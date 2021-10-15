// 문자형
const name = "Mike"; //문자형 String

const name1 = "Mike"; // 큰따옴표
const name2 = 'Mike'; // 작은 따옴표. 
const name3 = `Mike`; //` backtick 이라고 불린다. 

const message1 = "I'm a boy."
const message2 = 'I\'m a boy.' //문장 안에 다른 작은 따옴표는 \로 처리를 해주면 정상 인식 된다.

const message3 = `My name is ${name}`; //백틱은 문장 내부에 변수 설정
//해당 방식으로 변수를 담은 문자열을 지정시 일반 따옴표로 하면 문자 있는 그대로 출력되어 버린다. 
console.log(message3);

const message4 = `나는 ${20 + 9}살 입니다.`;//또는 수식을 넣어서 쓸 때 유용하다. 
console.log(message4)

const a = "나는 ";
const b = " 입니다.";

console.log(a + name + b); // 나는 Mike 입니다. 라고 출력된다. 즉, 문자열끼리 덧셈은 합치기를 한다는 말이다. 

const age = 30;
console.log(a + age + "살" + b); // 나는 30살 입니다. 라고 출력된다. 즉, 숫자형도 함께 덧셈에 들어가면 디폴트로 문자형으로의 형변환이 일어난다. 

// 숫자형
const age = 30; //숫자형 Number
const PI = 3.14;

console.log(1 + 2); // 연산들을 진행할 수 있다. 
console.log(10 - 3);
console.log(3 * 2);
console.log(6 / 3);
console.log(6 % 4);

const x = 1/0;
console.log(x) // Infinity 라고 출력됨

const name = "Mike";
const y = name / 2; //문자를 숫자로 나누기는? 
console.log(y) // Nan(Not a number) 라는 메시지가 출력됨. 작업시 염두하고 해야 한다.

// Boolean
const a = true;
const b = false;

//example
const name = "Mike"
const age = 30;

console.log(name == 'Mike') // true 메시지 뜸
console.log(age > 40) // false 메시지 뜸

// Null & undefined
	// Null : 존재하지 않는 값
	// undefined : 값 미할당
let age;//변수 선언
console.log(age) // 이렇게 하면, 값이 할당 되지 않아 undefined가 출력됨 

let user = null; //user 라는 것은 존재하지 않는다- 로 이해하면 된다. 

// typeof 연산자
const name ='Mike';

console.log(typeof 3); // "number"
console.log(typeof name); // "string"
console.log(typeof true); // "boolean"
console.log(typeof "xxx"); // "string"
console.log(typeof null); // "object"
console.log(typeof undefined); // "undefined"
// 변수의 자료형을 알 수 있다. 
// 내가 작성한 코드나 프로그램 상에서는 쓸 일이 없을 수 있다.
// 하지만 다른 사람이 만든 것을 파악하기 위해, API 통신등을 통해 받아온 데이터에 대하여 데이터 타입에 따라 다른 방식으로 처리해야할 때 주로 사용 된다.
// type of null; //"object" : 객체형을 의미한다. 
// 	단, null 자체는 객체는 아니다. 하위 호환성을 위해 수정하지 않는 초기 버그이다.
