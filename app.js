// app.js
function login(username, password) {
 // 잘못된 조건 처리로 인해 로그인 오류 발생
if (username && password) {
 console.log("Login successful");
 } else {
 console.log("Login failed");
 }
}
// 버그: username이 비어 있을 때도 로그인 성공
메시지를 출력
