let one = document.getElementById("stepbl1");
let two = document.getElementById("stepbrdr1");

let one2 = document.getElementById("stepbl2");
let two2 = document.getElementById("stepbrdr2");

let one3 = document.getElementById("stepbl3");
let two3 = document.getElementById("stepbrdr3");

one.onmouseover = function(){
    two.style.borderBottom = "3px solid white";
}
one.onmouseout = function(){
    two.style.borderBottom = "3px solid black";
}

one2.onmouseover = function(){
    two2.style.borderBottom = "3px solid white";
}
one2.onmouseout = function(){
    two2.style.borderBottom = "3px solid black";
}

one3.onmouseover = function(){
    two3.style.borderBottom = "3px solid white";
}
one3.onmouseout = function(){
    two3.style.borderBottom = "3px solid black";
}