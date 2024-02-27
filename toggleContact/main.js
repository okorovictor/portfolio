//Declear Variable
var button = document.getElementById("bttn");
var button2 = document.getElementById("bttnx");
var mail_h1 = document.getElementById("data-mail");
var num_h1 = document.getElementById("data-num");
var mailChecker = false;
var numChecker = false;
// var isPremium = false;


//Functions
function showEmail(){

        if (mailChecker == false) {
                //what will happen if true
                mail_h1.innerHTML = "okorov@gmail.com";
                mailChecker = true;
        } else {
                mail_h1.innerHTML = "Email not set!";
                mailChecker = false;
        }
        
}

function showNum(){
        if (numChecker == false) {
                num_h1.textContent = "Mob number not set!";
                numChecker = true;
        } else {
                num_h1.textContent = "+2349033019858";
                numChecker = false;
        }
}






//Handle Event
button.addEventListener("click", showEmail);

button2.addEventListener("click", showNum);

