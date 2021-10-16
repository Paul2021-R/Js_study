// for 반복문 
for (let i = 0; i < 10 ; i++) {
//(초기값, 조건, 증가값_코드 실행 후 작업){반복할 코드} 
}

// 1부터 10까지 로그를 실행하는 예문
for(let i = 0 ; i < 10 ; i++){
	console.log(i + 1);
}//1 ~ 10까지 작성 된다. 

// while 반복문 
let i = 0;
while (i < 10){
//수행할 반복문 
}

// 1부터 10까지 로그를 실행하는 예문
let i = 0;

while (i < 10){
	console.log(i);
	i++;
}

// do...while 반복문 
	// while 문과 무슨 차이? 
		// 기본적으로 do가 1회는 실행이 되고 조건이 맞는지 확인을 한다. 반대로 while 문은 조건이 먼저 나오므로, 조건에 맞지 않으면 실행되지 않는다. 
let i = 0;

do{
	//코드
	i++;//또는 --
} while (i < 10)

// 반복문 escape 명령어
// break, continue
	// break : 만나는 순간 즉시 해당 반복문을 멈추고 빠져나온다. 
	// continue : 멈추는 순간 해야할 일들은 멈추지만, 반복문 안을 계속 유지한다. (다음 번에 조건에 맞다면 명령을 다시 실행한다는 말이 된다. 

// break 예제
while(true){ //while(1) 은 무한대를 의미한다.
	let answer = confirm('계속 하겠습니까?');
	if (!answer){
		break;
	}
}

// continue 예제
for (i = 0; i < 10; i++){
	if(i % 2){
		console.log(i)
			continue ;
	}
	else
		console.log(i);
}// continue 조건에 걸리면서, 넘어가지만 반복문 안에선 유지하므로 0, 2, 4, ... 짝수는 그대로 나오게 된다. 

// 저자의 tip
// 저자 본인은 횟수가 정해져 있다면 for 문을, 아닌 경우 while 문만을 쓰며, do-while 문은 쓰지 않는다.
// 이는 코드의 성능 향상을 위해, 한 줄이라도 줄이기 위함이라고 한다. 
