/*
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서,
약수의 개수가 짝수인 수는 더하고,
약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수
*/

// 나머지 갯수 구하는 방법
function remainder(divide) {
  let num = divide; // 나누어지는 숫자
  let idx = 1; // 나누려는 숫자
  let cnt = 0; // 약수의 갯수
  while (idx <= num) {
    if (num % idx === 0) {
      cnt += 1;
    }
    idx += 1;
  }
  return cnt;
}

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    if(remainder(i) % 2 === 0) {
     answer += i;
    } else {
      answer -= i
    }
  }
  return answer;
}

solution(13, 17);