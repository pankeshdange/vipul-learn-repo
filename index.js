function showMessage() {
alert("Welcome to the DevOps World 🚀");
}


function greetUser() {
const name = document.getElementById("name").value;
const output = document.getElementById("output");


if (name.trim() === "") {
output.textContent = "Please enter your name";
output.style.color = "red";
return;
}


output.textContent = `Hello ${name}, welcome to DevOps!`;
output.style.color = "#22c55e";
}
