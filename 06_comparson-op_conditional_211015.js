//비교 연산자 
// < > <= >= == != (C와 동일하다)
// 이때 = 를 쓰지 않고 == 를 쓰는 것은 = 가 대입의 의미를 갖고 있기 때문이다. 
// !는 Not의 의미로 결과는 boolean 형으로만 반환한다. 

console.log(10 > 5); //true
console.log(10 == 5); //false 동등 연산자
console.log(10 != 5); //true

// 동등연산자 알아둬야 할 내용
const a = 1;
const b = "1";
console.log(a == b); // true가 나와버림(오잉)

console.log(a === b); // false, 3개를 쓰면 자료형까지 맞는지를 확인한다. 일치연산자라고 부른다.
// 가급적이면 확인하는 작업에서 일치 연산자를 써서 정확하게 비교하는 것이 좋다. 

//조건문(if)
if(age > 19){
console.log('환영합니다');
}
if(age <= 19){
console.log('안녕히가세요');
}
//코드의 통일성과 가독성을 위한 중괄호 표시는, 명령이 한 줄이라도 적어라.
//if문 안의 조건은 항상 boolean 형으로 변환하여(1, 0) 판단됨.

//if, else, else if
// 1st 예시문 (if문 만 활용한 경우 어떤 일이 벌어지는가?)
const age = 30;

if(age > 19){
	console.log('환영합니다.');
}
if(age <= 19){
	console.log('안녕히 가세요.');
}
console.log('---------------------');

// else 예시문
// 추가 요구사항이 있을 때는?

const age = 30;

if(age > 19){
	console.log('환영합니다.');
} else if(age === 19){
	console.log('수능 잘 치세요.');
}
	else {
	console.log('안녕히 가세요.');
}
console.log('---------------------');

