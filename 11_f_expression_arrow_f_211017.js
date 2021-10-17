/*
10번 강의에서 나온 것은 '함수 선언문' 이라고 한다.
이름이 없는 함수를 변수에 할당하는 방식으로도 선언이 가능하다.
    
    let sayHello = function(){
    
    console.log('Hello');
    
    } → 함수 표현식 이라고 한다. 해당 방식으로 함수를 정의 내리고, 호출 시에는 동일하게 진행하면 된다. 

차이는?  호출할 수 있는 타이밍이 다르다.
- 함수 선언문(function declaration) = 어디서든 호출 할 수 있다. 함수 선언 후, 위에서 호출을 하든 어디든 상관 없음.  자바스크립트는 코드에 선언된 모든 함수들을 미리 읽어내어 저장해두므로, 변수들과는 다르게 후에 선언되도 함수를 읽어낼 수 있도록 되어 있음. (해당 기능을 호이스팅(hoisting)이라고 한다. )
- 함수 표현식(function expression) = 이렇게 작성시, 자바 스크립트가 한 줄씩 읽으면서 실행됨. 해당 코드 도달 시 함수가 생성 된다.
- 무엇이 도움이 되는 가?
    - 기본적으론 두 식의 방식의 큰 차이는 없다. 오히려 신경쓰기 싫은 서순 에러 등을 생각한다면 '함수선언문' 이 더 낫다.
 * */
// 화살표 함수(arrow function)
//기존의 함수식 
let add = function(num1, num2){
	return num1 + num2;
}
//화살표 함수식 (보다 간결하게)
	// 기본 방식에서 function 명칭 삭제
	// 1번에서 중괄호를 소괄호로 묶은 모습
	// 1줄의 명령인 경우 괄호 생략 가능 (리턴도)
let add = (num1, num2) => }
	return num1 + num2;
}

let add = (num1, num2) => (
 return num1 + num2
)

let add = (num1, num2) => num1 + num2;

//주의사항
	// 인수가 없는 함수는 괄호 생략은 불가
let showError = () => {
	 alert('error!');
}
	// 여러 줄의 함수 내부 명령문이 있으면 ()로 묶는 것은 불가능 
let add = (num1, num2) {
	const result = num1 + num2;
	return result;
}
//함수 표현식

ShowError(); //<- 해당 명령을 호출하고,

let showError = function(){
	console.log('error');
}
// 실행 안됨 -> 함수 표현식은 함수 선언문과는 다르다.

// 함수 선언문 -> 이렇게 평상시 처럼 선언하면? 문제 없이, 위 아래 어디든 상관없이 호출이 된다.
function showError(){
	console.log("error");
}

// 화살표 함수 예제 1
let showError = () => {
	conlsole.log("error");
}

// 화살표 함수 예제 2
	//before
const sayHello = function(name) {
	const msg = `Hello, ${name}`;
	console.log(msg);
}
	//After
const sayHello = (name) => {
	const msg = `Hello, ${name}`;
	console.log(msg);
}

// 화살표 함수 예제 3
	//before
const add = function (num1, num2) {
	const result = num1 + num2;
	return result;
}
	//after
const add = (num1, num2) => {
	const result = num1 + num2;
	return result;
}

	//after_소괄호 버전
		// 매개변수(num1, num2 와 같은)가 여러개라면 괄호 없이도 아래와 같이
		// 매개변수 하나 뿐이면 괄호는 선택사항
		// 매개변수가 없을 시 한줄 짜리라도 괄호 필요
const add = (num1, num2) => (
	return num1 + num2
)

	//after_shorter
const add = (num1, num2) => num1 + num2;
