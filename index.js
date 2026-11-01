let username = document.getElementById("t1");
let password = document.getElementById("t2");
let loginbtn = document.getElementById("btn");
let par = document.getElementById("p");


loginbtn.onclick = function(){

    if (username.value === "Shaakir" && password.value === "123"){
        
        window.location.href = "dashboard.html";
    }else {
        par.textContent = "Invalid!";
    }
};