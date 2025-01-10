let arr = [];
let obj = {};
let stuname;
let phoneNo;
let email;
let username;
let password;
function stuRegsave(){
     stuname = document.getElementById("t1").value;
     phoneNo = document.getElementById("t2").value;
     email   = document.getElementById("t3").value;
     username = document.getElementById("t4").value;
     password = document.getElementById("t5").value;
     localStorage.clear();
    localStorage.setItem("stuname",stuname);

    localStorage.setItem("phoneNo",phoneNo);
    localStorage.setItem("email",email);
    localStorage.setItem("username",username);
    localStorage.setItem("password",password);
    // obj = {"stuname":stuname,"phoneNo":phoneNo,"email":email,"username": username,"password": password};
    // arr.push(obj);
    view();
    console.log(localStorage.getItem("stuname"));
    
}            
function view(){
    let result = document.getElementById("result");
    result.innerHTML =  localStorage.getItem("stuname") + localStorage.getItem("phoneNo") + localStorage.getItem("email") + localStorage.getItem("username") + localStorage.getItem("password"); 
    // result.innerHTML = localStorage.getItem("stuname");
}
function btn(){
    view();
}
           
// function View(){
//    let k = "";
//    let v = "<table border=1><tr><td>studentName</td><td>phoneNo</td><td>email</td><td>username</td><td>password</td></tr>";
//    for(x in arr){
//     for(y in arr[x]){
//         k = k + "<td>" + arr[x][y] + "</td>";
//     }
//     k =  k + "</tr>"
//    }
//    document.getElementById("result").innerHTML = v + k + "</table>";
// }
// function updt(){
//     let t2 = document.getElementById("t2").value;
//     for(x in arr){
//         for(y in arr[x]){
//             if(t2==arr[x][y]){
//                 i = arr.indexOf(arr[x])
//             }
//         }
//     }
//     alert(i);
//     delete arr[i];
// }
             

  
  
  
  
  
 
    








     