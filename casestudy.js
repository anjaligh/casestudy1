
var xhttp=new XMLHttpRequest();
// console.log("nothing");
xhttp.onreadystatechange= function(){
    if (this.readyState==4 && this.status==200){
        var response=JSON.parse(this.responseText);
        var output=" ";
        var count=0;
        var count1=0;
        for(var i=0;i<response.length;i++){
            // console.log(i);
            var res=response[i].title;
            var stat=response[i].completed;
            // console.log(stat);
            
            if (stat ==true){
                // console.log('this is executing')
                output +="<li><input type='checkbox' id='check' checked >" + res+"</li>";
                count=count+1;
            }
            else if(stat==false){
                output +="<li><input type='checkbox' id='check' onchange='doalert(check)'>" + res+"</li>";
            }

            console.log(count);
               

        }
        
        
        document.getElementById('demo').innerHTML=output;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

function loggedOut(){
    alert("Are you sure to log-out?")
}
function doalert(checkboxElem) {
    // console.log(count1);
  if (checkboxElem.checked) {
    alert ("hi");
    
  } else {
    
    alert(`One Todo is completed`);
    count1=count1+1;
    return count1;
    
  }
}
