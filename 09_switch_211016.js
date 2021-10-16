// if-else 문과 기능적 차이는 없음. 보다 간결하게 케이스 별로 정리하여 보여주므로 유용할 수 있다. 

// switch 문
switch(평가){
	case A:
		// A 조건일 때 코드
	case B:
		// ...
	...
}

// 예문
// 사과 100원, 바나나 200원, 키위 300원, 멜론 500원, 수박 500원, 사고싶은 과일을 물어보고 가격 알려주기.

let fruit = prompt('원하시는 과일을 입력해주세요')

switch(fruit){
	case '사과' :
		alert('100원 입니다.');
		break ;
	case '바나나' :
		alert('200원 입니다.');
		break ;
	case '키위' :
		alert('300원 입니다.');
		break ;
	case '멜론' :
	case '수박' :
		alert('500원 입니다.');
		break ; // 동일한 결과를 나타낼 때는 해당 방식으로 적으면 두 개 중 하나가 걸릴 시 명령어를 수행하도록 만들수 있다.
	default :
		alert('과일을 잘못 입력하였습니다. 다시 입력하여 주십시오.');
	  let fruit = prompt('원하시는 과일을 입력해주세요')
		break ;
}
