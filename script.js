
let input = document.getElementById("inp");
let buttons = document.querySelectorAll("button");

//Disallow to add manually
input.addEventListener('keydown', function(event) {
  event.preventDefault();
});

input.addEventListener('paste', function(event) {
  event.preventDefault();
});

input.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});

let string = "";

let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click", (e) => {
        if (e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        } else if (e.target.innerHTML == "AC"){
            string = ""
            input.value = string;
        } else if (e.target.innerHTML == "DEL"){
            string = string.substring(0, string.length - 1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})