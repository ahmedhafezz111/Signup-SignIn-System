var userNameInput = document.getElementById('userName')
var userEmailInput = document.getElementById('userEmail')
var userPasswordInput = document.getElementById('userPassword')
var checkPasswordInput = document.getElementById('checkPassword')


var userList=[];

if(localStorage.getItem('users')==null){   
    userList=[]

 

}else{
    userList=JSON.parse(localStorage.getItem('users'))
}

function signUp(){
  var user={
        name:userNameInput.value,
        email:userEmailInput.value,
        password:userPasswordInput.value,
        check:checkPasswordInput.value,

    }

    if(userNameInput.value =='' || userEmailInput.value =='' || userPasswordInput.value==''||checkPasswordInput.value=='' ){

            var element =document.querySelector(".alert")
            element.classList.remove('d-none')
          
          
            
    }else if(!emailValidation()){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "you should enter valid email address",
            });
    }else if(!passwordVaildation()){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "you should enter valid password",
            });
    } else if(userPasswordInput.value != checkPasswordInput.value){
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "check password is not correct",
            });
    }else if (userList.some(function(user) {
        return user.email === userEmailInput.value;
    })) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Email already exists",
        });
    }else{
        userList.push(user)
        localStorage.setItem('users',JSON.stringify(userList))
        
        var element =document.querySelector(".alert")
        element.classList.add('d-none')

        const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
                // toast.onmouseenter = Swal.stopTimer;
                toast.onmouseleave = Swal.resumeTimer;
            }
            });
            Toast.fire({
            icon: "success",
            title: "Signed up successfully"
            });
         

    }

    

}
function emailValidation(){
   
    var regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(userEmailInput.value)
}
function passwordVaildation(){
    var regex=/^(?=.*[A-Z])(?=.*[@#$%^&+=_])[A-Za-z0-9@#$%^&+=_]*$/
    return regex.test(userPasswordInput.value)&&regex.test(checkPasswordInput.value)

}
function typing(){
    var element =document.querySelector(".alert")
    element.classList.add('d-none')
    
}


function changeColor(input) {
    input.style.color = "#E3E3E3"; 
}