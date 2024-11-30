var loginEmailInput = document.getElementById('loginEmail')
var loginPasswordInput = document.getElementById('loginPassword')


var userList = JSON.parse(localStorage.getItem('users')) || [];

function logIn(){

  var loggedInUser=  userList.find(function(user){
        return user.email === loginEmailInput.value && user.password === loginPasswordInput.value;
    });
     if(loggedInUser){
        sessionStorage.setItem('loggedInUser', JSON.stringify(loggedInUser));
        var element = document.querySelector('#myLogin')
        element.setAttribute('href','welcome.html')
        document.getElementById("Welcome").innerHTML = `<h2>Wlecome  ${loggedInUser.name}</h2>`
    } 

    else if(loginEmailInput.value == '' || loginPasswordInput == '' ){
        var element = document.querySelector('#loginAlert1')
        element.classList.remove('d-none')
    }else if(!loggedInUser){
        var element = document.querySelector('#loginAlert2')
        element.classList.remove('d-none') 
    }else{
        sessionStorage.setItem('logged in')
     
    }
}



function typing(){
    var element =document.querySelector(`#loginAlert1`)
    var element2 =document.querySelector(`#loginAlert2`)
    
    if (element) {
        element.classList.add('d-none'); 
    }
    if (element2) {
        element2.classList.add('d-none'); 
    }
}
