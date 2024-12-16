const greetings = ["Welcome to Our Restaurant!", "Enjoy Fine Dining!", "Fresh Meals Await!"];
let index = 0;
setInterval(() => {
  index = (index + 1) % greetings.length;
  document.getElementById("greeting").textContent = greetings[index];
}, 4000);



var formInputs = document.querySelectorAll("form .form-control");

for (var i = 0; i < formInputs.length; i++) {
    formInputs[i].onchange = function() {
        this.value = this.value.toUpperCase();
        this.style.color = "orange"; 
    };
}



var form = document.querySelector("form");
form.onsubmit = function(event) {
    event.preventDefault(); 

    var successMessage = document.createElement("p");
    successMessage.textContent = "The form has been submitted successfully!";
    successMessage.style.color = "orange";
    successMessage.style.marginTop = "10px";

    form.appendChild(successMessage);
};





var prices = document.querySelectorAll(".price");
for (var j = 0; j < prices.length; j++) {
    prices[j].onmouseover = function() {
        this.style.fontSize = "1.5rem"; 
    };

    prices[j].onmouseout = function() {
        this.style.fontSize = "1rem"; 
    };
}


var buttons = document.querySelectorAll(".btn-primary");
var newImageURL = "https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=";

for (var k = 0; k < buttons.length; k++) {
    buttons[k].onclick = (function(index) {
        return function() {
            var cardImage = document.querySelectorAll(".card-img-top")[index];
            cardImage.src = newImageURL; 
        };
    })(k);
}
