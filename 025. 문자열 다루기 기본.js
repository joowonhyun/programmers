/*
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요.
예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.
*/

function solution(s) {
  if (s.length === 4 || s.length === 6) {
    const arr = s.split('').map(i => +i);
    for (const i of arr) {
      if (isNaN(i)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
solution("a234");

solution(13, 17);