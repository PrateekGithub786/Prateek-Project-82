var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var mouseEvent = "empty";
var color = "black";
var width_of_line = 1;
var radius;

canvas.addEventListener("mousedown", my_mousedown);
canvas.addEventListener("mouseup", my_mouseup);
canvas.addEventListener("mousemove", my_mousemove);
canvas.addEventListener("mouseleave", my_mouseleave);

function my_mousedown(event) {
    color = document.getElementById("color").value;
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}

function my_mouseup(event) {
    mouseEvent = "mouseup";
}

function my_mouseleave(event) {
    mouseEvent = "mouseleave";
}

function my_mousemove(event) {
     current_position_of_mouse_x = event.clientX - canvas.offsetLeft;
     current_position_of_mouse_y = event.clientY - canvas.offsetTop;

    if (mouseEvent == "mousedown") {
        console.log("Current position of x and y Coordinates = ");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width_of_line;
        ctx.arc(current_position_of_mouse_x, current_position_of_mouse_y, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
}

function clear_area() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}