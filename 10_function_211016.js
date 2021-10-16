// 서비스의 동작들을 여러곳에서 만들거나, 자주 쓴다면 하나의 기능으로 정의 및 구현하는게 효과적. 그때 사용하는 것이 함수이다.
// 브라우저가 이미 가지고 있는 대표 내장 함수 : console, alrert, confirm
// 함수 구조
// 함수 함수명(매개변수(인수), 매개변수2, ...){ 명령문 } 
function sayHello(name){
	console.log('Hello, ${name}');
}

//매개변수 없는 함수 작성 
function showError(){
	console.log('error');
	alert('error');
}

...

...

showError(); // 이렇게 사용하면 호출이 된다... C 랑 당연히 똑같지 뭐.

//매개변수 있는 함수 작성
function sayHello(name){
	let msg = `hello`;
	if (name) {
		msg = `Hello, ${name}`;
		// 또는 msg += `, ${name}`;
}
	console.log(msg);
	alert(msg);
	if (name) {}
}

...

sayHello('Mike')
sayHello('Tom')
sayHello('Jane')
sayHello('Ki')
sayHello();
// 한 가지 알아야 할 점! 지역변수. 
// 지역변수는 해당 함수 내에서만 사용되는 임시저장소 이므로 함수 밖에서 사용할 수 없다. 
// 만약 사용을 밖에서도 하려면 변수 자체를 애초에 함수 내부에서 밖으로 빼줘야한다. (전역변수)

// 전역변수, 지역변수 차이는...?

let msg = 'welcome';

function sayHello(name){
	let msg = "Hello"
	console.log(msg + ' ' + name);
}

sayHello('Mike');
// "Hello Mike" 라고 입력된다. 
// 전역변수로 설정된 msg 라는 변수 자체는 존재하지만 함수 내에 관여하진 않는다.

let name = "Mike";

function sayHello(name){
	console.log(name);
}

sayHello(); // undefined 라고 메시지가 뜸
sayHello('Jane'); // Jane이라고 뜸
// 전역변수가 지정되어 있어도, 함수 내부에 매개변수로 입력되지 않는 이상 전역변수는 함수에 영향력을 끼치지 못한다. 

//위의 예시에서 undefined 를 막는 방법
function sayHello(name){
// name의 default값을 줄 수도 있다. 
// function sayHello(name = 'friend')
// 이렇게 하면 미입력시 자동으로 입력될 수 있다. 
	let newName = name || 'friend';
	let msg = `Hello, ${newName}`;
	console.log(msg);
}

sayHello();
sayHello('Jane'); 
//이렇게 작성되면, name이 없다 하더라도 friend 가 입력 되어 사용이 가능하다. 
//요 기능 자체는 괜찮네. 좀더 깔끔하게 사용 가능하는 것도 괜찮네. 

// return으로 값을 반환하는 함수 
function add(num1, num2){
		return num1 + num2;
}

const result = add(2, 3);
consloe.log(result);


// 함수 유의사항 
	// 한번에 한 작업에 집중해야 한다. 
	// 읽기 쉽고 어떤 동작인지 알 수 있게 네이밍 하는 것이 좋다
		//showError
		//getName
		//createUserData
		//checkLogin
		//등등 ...ㅣ
