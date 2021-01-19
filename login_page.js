const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

   if (username === "Bhanu" && password === "royal123") {
        alert("Hurray you logged in  successfully.");
        location.replace("home_page.html");
    } else
        alert("Invalid username or password");
   
})


