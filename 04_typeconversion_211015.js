/*
String() // 문자형으로 변환
Number()
Boolean()
*/

//example
const mathScore = prompt("수학 점수를 입력하세요.");
const engScore = prompt("영어 점수를 입력하세요.");
const result = (mathScore + engScore) / 2;

console.log(result);

// 이렇게 하면 어떻게 될까?
// 터진다. why? 형이 문자형이기 때문에 덧셈을 하게되면 문자형 그대로 되어 나오게 된다.
// prompt 로 입력받음 -> 문자형 -> 기본적으로 붙이기가 됨.
// 단, 이때 / 2 는 제대로 나올 수 있다 이는 자동형변환 기능이 들어있기 때문이다.
// 문제는 이러한 형변환을 그냥 되도록 두면 되긴 하겠지만 나중에 의도치 않은 문제들에 대한 대응이 불가능하다.
// "명시적 형변환"을 그래서 해줘야 한다.

// 문자형 변환
console.log(
String(3),
String(true),
String(false),
String(null),
String(undefined);
)
// "3", "true", "false", "null", "undefined" 라고 콘솔에 뜨게 됨.
// 주의사항은 대문자 구분 필요.

// 숫자형 변환
Number("1234") // 1234 숫자형으로 형변환 일어남.
Number("1234sdfafd") // Nan 이 뜨면서 에러를 일으킴
Number(true), Number(false) // 1, 0으로 변환됨

// Boolean()
Boolean() //false 케이스만 기억해둘 것!
// 숫자 0
// 빈문자열''
// null
// undefined
// Nan

// 주의사항
Number(null) // 0이 된다
Number(undefined) // NaN이 된다.

Number(0) // false
Number('0') // true

Number('') // false
Number(' ') // true
