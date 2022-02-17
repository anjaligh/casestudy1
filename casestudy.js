
var xhttp=new XMLHttpRequest();
// console.log("nothing");
xhttp.onreadystatechange= function(){
    if (this.readyState==4 && this.status==200){
        var response=JSON.parse(this.responseText);
        var output=" ";
        for(var i=0;i<response.length;i++){
            console.log(i);
            var res=response[i].title;
            var stat=response[i].completed;
            console.log(stat);
            if (stat ==true){
                console.log('this is executing')
                output +="<li><input type='checkbox' checked>" + res+"</li>";
            }
            else if(stat==false){
                console.log('this is also executing')
                output +="<li><input type='checkbox'>" + res+"</li>";
            }
            // console.log('that');
               

        }
        document.getElementById('demo').innerHTML=output;
    }
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

function loggedOut(){
    alert("Are you sure to log-out?")
}

