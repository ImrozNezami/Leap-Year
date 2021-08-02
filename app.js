var ip = document.querySelector("#ip");
var btn = document.querySelector("#btn");
var op = document.querySelector("#op");
var ip1 = document.querySelector("#ip1");
function check() {
    var datevalue = ip.value.split("-");
    var year = Number(datevalue[0]);
    if (ip.value == "" || ip1.value == "") {
        op.innerText = "Please enter name or date properly";
    }
    else if (year % 400 == 0) {
        op.innerText = ip1.value + " was born in a leap year";
    }
    else if (year % 100 == 0) {
        op.innerText = ip1.value + " was not born in a leap year";
    }
    else if (year % 4 == 0) {
        op.innerText = ip1.value + " was born in a leap year";
    }
    else {
        op.innerText = ip1.value + " was not born in a leap year";
    }
}

btn.addEventListener("click", check);
