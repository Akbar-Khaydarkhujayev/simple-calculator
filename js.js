let buttons = document.getElementsByTagName("button");
let input = document.getElementById("monitor");
let backspace = document.getElementById("backspace");

let num1;
let num2;
let sign;
let num3;
let num4;

for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", function(){
        if(buttons[i].innerText == "+"){
            num4 = input.value.length;
            num1 = Number(input.value);
            sign = "+";
            input.value = input.value + buttons[i].innerText;
        }
        else if(buttons[i].innerText == "-"){
            num4 = input.value.length;
            num1 = Number(input.value);
            sign = "-";
            input.value = input.value + buttons[i].innerText;
        }
        else if(buttons[i].innerText == "×"){
            num4 = input.value.length;
            num1 = Number(input.value);
            sign = "*";
            input.value = input.value + buttons[i].innerText;
        }
        else if(buttons[i].innerText == "÷"){
            num4 = input.value.length;
            num1 = Number(input.value);
            sign = "/";
            input.value = input.value + buttons[i].innerText;
        }
        else if(buttons[i].innerText == "+/-"){
            num1 = Number(input.value);
            input.value = -input.value;
        }
        else if(buttons[i].innerText == "AC"){
            num1 = 0;
            num2 = 0;
            sign = "";
            input.value = "";
        }
        else if(buttons[i].innerText === "="){
            input.value.length = input.value.length - 1;
            num2 = Number(input.value.substr(num4+1));
            if(sign == "+"){
                input.value = num1 + num2;
            }
            else if(sign == "-"){
                input.value = num1 - num2;
            }
            else if(sign == "*"){
                input.value = num1 * num2;
            }
            else if(sign == "/"){
                input.value = num1 / num2;
            }
            else if(buttons[i].innerText == "AC"){
                num1 = Number("0");
                num2 = Number("0");
                sign = "";
                input.value = "";
            }
        }
        else{
            input.value = input.value + buttons[i].innerText;
        }
    })
}
function clearOne(){
    var num5 = document.getElementById("monitor").value;
    num5 = num5.substr(0,num5.length-1);
    document.getElementById("monitor").value = num5;
}