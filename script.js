const correctAlert = document.getElementById('correct');
const WrongAlert = document.getElementById('wrong');
function AlertHider() {
    correctAlert.style.display = "none";
    WrongAlert.style.display = "none";
}
AlertHider();
// generate button strt
var getPin = document.getElementById('Pin-button').addEventListener("click",function () {
    let random = Math.floor(Math.random() * 10000);    
    AlertHider();
    if (random < 1000) {
        document.getElementById("randomPin").value =  random + 1000;
    } else {
        document.getElementById("randomPin").value  =  random;
    }
 })

// delet btn
let backSpace = document.getElementById("delete");
backSpace.addEventListener("click" , function () {
    inputPin.value = inputPin.value.slice(0,-1);
})

// clear button
let clear = document.getElementById("clear");
clear.addEventListener("click" , function () {
    inputPin.value = "";
})

// submit button
 const submitBtn = document.getElementById('submit-btn');
 const generatedPin = document.getElementById('randomPin');
 const inputedPin = document.getElementById('inputPin');
 let trial = document.getElementById("try");
 
 submitBtn.addEventListener("click" , function () {
    AlertHider();
    if (generatedPin.value == "" || inputedPin.value == "") {
        alert("input must not be empty!");
        AlertHider();
    }
     else if ( generatedPin.value == inputedPin.value) {
        correctAlert.style.display = "block";
     } else {
        WrongAlert.style.display = "block";
        trial.innerHTML = trial.innerHTML -1;
        if (trial.innerHTML == 0) {
            document.getElementById("submit-btn").disabled = true;
            document.getElementById("submit-btn").innerHTML = "Disabled!";
            AlertHider();
        }
     }
 })