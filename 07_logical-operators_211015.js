/*
1. 연산자 종류 
    
    ||(OR) , &&(AND), !(NOT)
    
    C 언어의 그것과 거의 동의하다. 
    
2. 평가
    1. ||(OR) : 첫번째 true를 발견 즉시 평가를 멈춘다. 
    2. &&(AND) : 첫번째 false 를 발견 즉시 평가를 멈춘다. ← 어순에서 오류가 생길 수있는 요소임 
    3. 성능 최적화에 도움을 주기 위해선, 조건은 항상 좁은 조건으로 추려서 모집단 수를 확실히 줄일 수 있는 것 우선으로 진행하면 좋다.
*/
// 3. 실사용 
a || b
a && b
!a 

//example
	//OR
	//이름이 TOM 이거나, 성인이면 통과

const name = "Mike";
const age = 30;

if(name === 'TOM' || age > 19){
	console.log('PASS')
}

	//AND
	//이름이 Mike, 성인이면 통과 
const name = "Mike";
const age = 30;

if(name === 'Mike' && age > 19){
	console.log('PASS');
} else {
	console.log('FAIL');
}

	//NOT
	//내 버전 .. 돌아 가려나?
const age = prompt("나이를 입력하세요");

if (Number(age) < 19)
{
	console.log("돌아가");
}

	//저자 버전
const age = prompt('나이를 입력하세요');
const isAdult = age > 19 

if(!isAdult) {
	console.log('돌아가주세요');
}

	// 비교 연산자의 우선순위
	// 남자이고, 이름이 Mike 이거나 성인이면 통과 
const gender = 'F';
const name = 'jane';
const isAdult = true;

if (gender === 'M' && name === 'Mike' || isAdult){
	console.log('통과');
} else {
	console.log('돌아가');
}
// 이렇게 적으면 놀랍게도 통과가 되어버린다.
// AND 보다 OR 연산자가 우선순위가 높기에 먼저 평가 된다. 
// 즉 gender ~ Mike 까지가 한 덩어리, 뒤에가 한 덩어리가 된다. 
// 이때 isAdult 가 true 이므로 무조건 true 가 되어 버리는 것이다. 
// 따라서 작성시 우선순위 조정을 해야 정확하게 조건을 세워 줄 수 있다. 
const gender = 'F';
const name = 'jane';
const isAdult = true;

if (gender === 'M' && (name === 'Mike'4 || isAdult)){
	console.log('통과');
} else {
	console.log('돌아가');
}
