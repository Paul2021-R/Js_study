// 순서가 있는 리스트
let students = ['철수', '영희', ... '영수'] // 고유 번호 0에서 부터 시작, 이를 index라고 부름 

console.log(students[0]); // 철수
console.log(students[1]); // 영희
console.log(students[29]); // 영수 호출시 나옴

students[o] = '민정'; // 수정도 가능 

console.log(students); // ['민정', '영희', ... ] 이런 식으로 호출 됨 

// 배열의 특징 
	// 배열은 문자, 숫자, 객체, 함수 등도 포함할 수 있음 
let arr = [
	'민수',
	3,
	false,
	{
		name : 'Mike',
		age : 30,
	}
	function(){
		console.log('Test')
	}
]//이런 식으로 다양한 것들이 다 올 수 있다. 

	// 배열의 길이 반환 명령어
${variablename}.length //students.length 라고 하면 30이 나오게 된다.

	// 배열 끝에 추가 메소드
let days = ['Mon', 'Tue', 'Wed']
days.push('Thu');
console.log(days) // ['Mon', 'Tue', ... 'Thu']

	// 배열 끝의 요소 제거 메소드
let days = ['Mon', 'Tue', 'Wed']
days.pop()
console.log(days);// ['Mon', 'Tue']

	// 배열 앞에서 추가 또는 제거 '
		//추가
days.unshift('Sun');
console.log(days); // ['Sun', 'Mon', 'Tue']
days.unshift('Fri', 'Sat', 'Sun'); //여러 요소를 한꺼번에 입력도 가능 
		//제거
days.shift();
console.log(days); // ['Mon', 'Tue']

	// 반복문 for을 활용하여 배열을 사용 하는 방법
let days = ['Mon', 'Tue', 'Wed']

for(let index = 0; indext < days.length; index++){
	console.log(days[index]); // 자동으로 모든 배열을 나오게 만들 수 있겠네...
}
	// 반복문 for .. of_단점은 인덱스가 없이 자동으로 출력되므로, 다른 조작이 쉽진 않을 듯 
for (let day of days){
	console.log(day);
}

