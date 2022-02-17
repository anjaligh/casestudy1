var user=document.getElementById("user");
var pwd=document.getElementById("pwd");
var validpwd=document.getElementById("validpwd");
function validateUser(callback){ 
    console.log("user2");
    
    return callback();
}
function callback1(){
    if(user.value!="admin" || pwd.value!="12345"){
        validpwd.innerHTML="Invalid login credentials!!";
        validpwd.style.color="red"
        console.log(pwd.value);
        console.log(user.value);
        return false ;
    }
     else if(user.value==="admin" && pwd.value==="12345"){
        validpwd.innerHTML="valid";
        // console.log(user);
        
        validpwd.style.color="green"
        return true;
        }
}

