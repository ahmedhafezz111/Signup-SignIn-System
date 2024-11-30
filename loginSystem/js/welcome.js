var loggedInUser = JSON.parse(sessionStorage.getItem('loggedInUser'));

if (loggedInUser) {
    document.getElementById("Welcome").innerHTML = `<h2>Welcome, ${loggedInUser.name}</h2>`;
} else {
    window.location.href = "login.html";
}