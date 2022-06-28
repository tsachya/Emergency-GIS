var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function () {
    let s1 = new String(username.value);
    let s2 = "maor123";
    let s3 = "tsach123";
    let s4 = "shira123";
    let s5 = "ariel123";
    if (s1 == s2 || s1 == s3 || s1 == s4 || s1 == s5) {
        idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' + "ADMIN: " + s1.slice(0, -3) + '</h1>' + '<a href="./admin.html">' +"Go to the admin page"+'</a>' + '</h1 >';
    } else {
        idLogin.innerHTML = '<p>We\'re happy to see you again, </p><h1>' + "USER: " + s1 + '</h1>' + '<a href="./user.html">' + "Go to the user page" + '</a>' + '</h1 >';
    }
}