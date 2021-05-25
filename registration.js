// function myfunc(){
//     document.getElementsByClassName("input").style.backgroundColor="yellow";
// }

function mouseover(i){
    var y= document.getElementsByClassName("label");
    y[i].style.fontWeight = "900";
}

// function mousedown(i){
//     var y= document.getElementsByClassName("input");
//     y[i].style.backgroundColor = "rgb(7, 214, 17)";
// }
function mouseup(i){
    var y= document.getElementsByClassName("input");
    y[i].style.backgroundColor = "white";
}

function mouseout(i){
    var y= document.getElementsByClassName("label");
    y[i].style.fontWeight = "400";
}


function Reset() {
    alert("The form was reset");
}