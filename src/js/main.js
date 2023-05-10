let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick=() => {
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    navbar.classList.remove('active')
}

var openFormButtons = document.getElementsByClassName("openCalorieFormBtn");

for (var i = 0; i < openFormButtons.length; i++) {
    openFormButtons[i].addEventListener("click", function() {
        var targetId = this.getAttribute("data-target"); 
        var popupForm = document.getElementById(targetId);
        popupForm.style.display = "block";
        popupForm.style.top = (this.offsetTop - popupForm.offsetHeight - 10) + "px";
        popupForm.style.left = this.offsetLeft + "px";
    });
}

  
document.getElementById("calorieForm").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("calorieForm").reset();
    document.getElementById("calorieForm").style.display = "none";
});
  
document.getElementById("openBMICalc").addEventListener("click", function() {
    var bmiCalc = document.getElementById("calculator");
    bmiCalc.style.display = "block";
    bmiCalc.style.top = (this.offsetTop - popupForm.offsetHeight - 10) + "px";
    bmiCalc.style.left = this.offsetLeft + "px";
  });


document.getElementById("closeBtn").addEventListener("click", function() {
    var bmiCalc = document.getElementById("calculator");
    bmiCalc.style.display = "none";
});


