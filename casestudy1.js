console.log('print callback2');
var user=document.getElementById("user").value;
    var pwd=document.getElementById("pwd").value;
    var validuser=document.getElementById("validuser");
    var validpwd=document.getElementById("validpwd");
function validateUser(){
    console.log('print callback3');
    
if(user=="admin" && pwd=="12345"){
validpwd.innerHTML="valid";
return true;
}
else{
    username();
}
function username(){
    if(user!="admin"){
        validuser.innerHTML="Invalid username";
        validuser.style.color="red";
        password();
        return false
    }
}
// function password(){
//     if(pwd!="12345"){
//         validpwd.innerHTML="Invalid password";
//         validpwd.style.color="red";
//         return false
// }
    // else if(user!="admin"){
//     user="";
//     pwd="";
    // validuser.innerHTML="Invalid username";
    // validpwd.style.color="red";
    // return false
// }
// else if(pwd!="12345"){
//     user="";
//     pwd="";
//     validpwd.innerHTML="Invalid password";
//     validpwd.style.color="red";
//     return false
// }
}
// function callback(){
//     console.log('print callback');
//     return true;
// }
// return validateUser(callback);