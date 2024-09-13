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
