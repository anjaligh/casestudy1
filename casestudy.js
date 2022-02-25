var count1=0;
var demo=document.getElementById('demo');
var xhttp=new XMLHttpRequest();
// const todos=new Promise(function(resolve,reject){
    xhttp.onreadystatechange= function(){
        if (this.readyState==4 && this.status==200){
            var response=JSON.parse(this.responseText);
            var output=" ";
            var output1=" ";
            var count=0;
            
            for(var i=0;i<response.length;i++){
                // console.log(i);
                var res=response[i].title;
                var stat=response[i].completed;
                // console.log(stat);
                
                if(stat==false){

                    output +="<li><input type='checkbox' id='check' onchange=doalert(check)>" + res+"</li>";
                    demo.innerHTML=output;
                    // callback1(output)
                    
                }
                else if (stat ==true){
                    // console.log('this is executing')
                    output +=`<li><input type='checkbox' id='check' checked>${res}</li>`;
                    count=count+1;
                    demo.innerHTML=output;
                    
                }
                console.log(count);
            }

        }
        console.log("demo");
    console.log(demo);

    }
    xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
    xhttp.send(); 
// });

function loggedOut(){
    alert("Are you sure to log-out?")
}
function doalert(checkboxElem) {
    // console.log(count1);
  if (checkboxElem.checked) {
    alert ("hi");
    
  } else {
    checkboxElem
    count1=count1+1;
    console.log(count1);
    // alert(`${count1} Todo is completed`);
    if(count1===5){
        alert("Congrats!!!!! 5 Tasks have been successfully completed..!!!");
    }
  }
}
