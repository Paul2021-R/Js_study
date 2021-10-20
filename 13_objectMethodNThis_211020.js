// 객체에 함수를 추가하면?
const superman = {
	name : 'Clark',
	age : 33,
	fly : function() {
		console.log('날아갑니다.')
	}
}

superman.fly(); //콘솔창에 '날아갑니다'라는 명령이 호출된다. 

//method : 객체 프로퍼티로 할당 된 함수 
//단축 구문으로도 작성이 가능하다. 
fly : function() {} 
fly () {} //function이란 구분자 생략 가능

//객체와 메소드의 관계
	//예제
const user = {
	name : 'Mike',
	sayHello : function(){
		// console.log(`Hello, I'm ${user.name}`); X
		console.log(`Hellom I'm ${this.name}`); // <= O
	}
}
	//예제의 호출 
user.sayHello(); // user 부분이 this 부분과 연결되어 작동함. 

	//추가 예제 
sayHello :function (){
	console.log(`Hello, I'm ${this.name}`); //this는 실행하는 시점, 런타임에 결정된다. 
}

let boy = {
	name :'Mike',
	sayHello,
}

let girl = {
	name :'Mike',
	sayHello,
}

boy.sayHello(); //각각의 앞부분 지칭을 통해 this가 결정되고, 이때 해당 부분을 확인하고 실행한다.
girl.sayHello();

//이때 메소드 함수를 화살표 함수로 표시시 제대로 표시가 안되게 됨 why?
sayHello :() => {
	console.log(`Hello, I'm ${this.name}`); //this는 실행하는 시점, 런타임에 결정된다. 
}
	// 화살표 함수는 자신만의 this를 일반함수 처럼 취하지 않음. 
	// 화살표 함수는 내부에서 this 사용 시, 그 this는 외부에서 값을 가져오게 된다. 
	// 즉, 외부에 지정된 것, 전역객체로 지정된 것을 가리키게 된다. 
boy.sayHello;// 예제에서 지정된 boy object에서가 아니라 전역 객채 변수로 설정된 것이 있다면, 거기서 호출을 하게 되는 것이다. 
	// 전역개체 
		//브라우저 환경 : window
		// Node js : global 

// 예제 작성
let boy = {
	name : 'Mike',
	showname: function () {
		console.log(this.name);
		//console.log(boy.nane)
	}
}

let man = boy; // man으로도 boy를 호출 가능하게 한 것.
man.name = 'Tom'; // man의 이름을 바꾸면?

console.log(boy.name); // boy의 이름도 Tom으로 바뀌어 출력된다. 

man.showName(); // Tom가 정상적으로 호출된다. 

boy = null; //boy로 접근 안되게 만듬. 
man.showName(); // error가 떠버린다. 왜냐면 boy가 삭제 되엇기에, boy로 호출되는건데 안됨.. 

//이때 this 로 바꾸면? 
man.showName(); //정상적으로 호출된다. man 을 기준으로 삼고 man.name으로 바뀌엇 호출되기 때문이다. 

// 화살표 함수 경우
let boy = {
	name : 'Mike',
	sayThis: function () {
		console.log(this);
	}
}

boy.sayThis(); // boy 객채의 사항이 다 튀어나오게 된다. 

//화살표 함수로 바꾸면? 
let boy = {
	name : 'Mike',
	sayThis: () => {
		console.log(this);
	}
}

boy.sayThis(); // error가 뜸. 왜냐하면 전역객체, 브라우저의 경우 window 상에 정의 내려진 변수를 불러옴. 
// 따라서 메소드 함수 작성시 화살표 함수는 쓰지 않는게 좋다. 
