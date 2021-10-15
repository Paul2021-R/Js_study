// + - * / %(Operators)

// 거듭제곱을 하고 싶을 때는?
const num = 2 ** 3;
console.log(num); // 8나옴 

// 우선순위 
// [ * / % ] > [ + - ] 

// 연산자 줄여쓰기 
let num = 10;
//num = num + 5;
num += 5; // 위의 식과 동일함. +, -, *, /, % 도 가능하다.

// 증가 연산자, 감소 연산자 
let num = 10;
num++; //num--, 지정에 따라 1 증가 혹은 1 감소로 이어짐

let result = num++;
console.log(result); // 이렇게 하면 콘솔 창에는 10이 뜨게 된다. 

let result = ++num;
console.log(result); // 이렇게 하면 1이 추가된 11이 뜨게 된다. 연산자의 위치에 따라 대입 우선순위가 정해진다. 
