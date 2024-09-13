// feature.js
function createLoginForm() {
 const form = document.createElement('form');
 form.innerHTML = `
 <input type="text" id="username"
placeholder="Username">
 <input type="password" id="password"
placeholder="Password">
 <button type="submit">Login</button>
 `;
 document.body.appendChild(form);
}

// feature.js
function createLoginForm() {
 const form = document.createElement('form');
 form.innerHTML = `
 <input type="text" id="username" placeholder="Username">
 <input type="password" id="password" placeholder="Password">
 <button type="submit">Login</button>
 `;
 document.body.appendChild(form);
 form.addEventListener('submit', function(event) {
 const username = document.getElementById('username').value;
 const password = document.getElementById('password').value;
 if (!username || !password) {
 event.preventDefault();
 alert("Both fields are required!");
 }
 });
}
