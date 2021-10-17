//Object

// object - 접근, 추가, 삭제 
const superman = {
	name : 'Clark',
	age : 33, // 각각의 property는 콤마로 구분하는 것이 이동 및 구분에 용의하다. 
}
// 접근
superman.name // 'Clark'
superman['age'] // 33

// 추가 
superman.gender = 'male'; 

// Object - 단축 프로퍼티. 좀더 짧고 간결하게 쓰는 방법
	//Before
const superman = {
	name : 'Clark',
	age : 33,
}

	//After
const name = 'Clark';
cost age = 33;

const superman = { 
	name, //name : name
	age, //age : age
}

//프로퍼티 존재 여부 확인 
superman.birthDay; //=> 없는 대상에 접근 시 undefined 뜸 

	//존재 여부 확인 방법
'birthDay' in superman; // false;
'age' in superman; // true

	//for ... in 반복문 : 객체를 순회하며 존재 여부를 확인할 수 있음
for(let key in superman){
	console.log(key)
	console.log(superman[key])
}
-------------------------------------------------------------------------------
//객체

const batman = {
	name : 'Bruce Wane',
	age : 35,
}

console.log(batman.name);
console.log(batman['age']);

console.log(batman); // 객체 자체를 찍으면 객체의 통 구조를 보여준다.

//추가
batman.hairColor = 'black';
batman['hobby'] = 'football';

//삭제
delete batman.age;

//이름과 나이를 받아, 객체로 변형하는 함수
function makeObj(name, age){
	return {
	name : name,
	age : age,
	hobby : 'football'
	}
}

const Mike = makeObj('Mike', 30);

	// 축약형
function makeObj(name, age){
	return {
	name,
	age,
	hobby : 'football'
	}
}

// 존재 여부 확인
console.log("age" in Mike);
console.log("birthDay" in Mike);

	// 존재여부 in의 활용해서 애매한 경우
function isAdult(user){
	if (user.age < 20){
		return false;
	}
	return true;
}

const Mike = {
	name : "Mike",
	age : 30,
}

const Jane = {
	name : "Jane"
}

console.log(isAdult(Mike)); // 성인이므로 false 가 뜬다.
console.log(isAdult(Jane)); // age 미기재 임에도 true 가 뜬다. 왜냐면 isAdult 함수에서 해당에 만족하는 키 자체가 존재하지 않으면 그 순간에 조건에서 벗어나 함수의 기본 리턴 값으로 나오기 때문이다.

		// 개선 한다면?
function isAdult(user){
	if (!('age' in user) || (user.age < 20)){
		return false;
	}
	return true;
}

const Mike = {
	name : "Mike",
	age : 30,
}

const Jane = {
	name : "Jane"
}

//객체 for ... in

const Mike = {
	name : "Maike",
	age : 30,
}

for (x in Mike){
	console.log(x); // 키의 이름이 뜸
	console.log(Mike[x]); // 키값들
}

