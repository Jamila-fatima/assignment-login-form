
var attempt = 2; // Variable to count number of attempts.
// Below function Executes on click of login button.
function btnFunction(){
var useremail = document.getElementById("exampleInputEmail1").value;
var password = document.getElementById("exampleInputPassword1").value;

if ( useremail == "test123@gmail.com" && password == "test123"){
alert (" Login successfully " + " by " +  useremail );
window.location.href = "success.html"; // Redirecting to other page.

}
else{
attempt --;// Decrementing by one.
alert("You have left "+attempt+" attempt;");
// Disabling fields after 3 attempts.
if( attempt == 0){
document.getElementById("exampleInputEmail1").disabled = true;
document.getElementById("exampleInputPassword1").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
return false;
}

function fileSubmit(){
    alert('you have submited file sucessfully!!')
}