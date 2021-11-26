var mouseEvent="empty";

canvas=
document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

color="blue";
widthofline=2;


canvas.addEventListner("mousedown",my_mousedown);



function my_mousedown(e){
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    radius=document.getElementById("radius").value;
    mouseEvent="mouseDown";
}
canvas.addEventListner("mousemove",my_mousemove);
function my_mousemove(e){
    current_position_of_mouse_x=e.clientX-canvas.offsetLeft;
    current_position_of_mouse_y=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
            ctx.strokeStyle=color;
                ctx.lineWidth=2;

        console.log("x = "+ current_position_of_mouse_x+ "y = " + current_position_of_mouse_y);
                    ctx.moveTo(current_position_of_mouse_x,current_position_of_mouse_y);
                    ctx.stroke();            
    
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=2;
    ctx.arc(current_position_of_mouse_x,current_position_of_mouse_y,40,2,2*Math.PI);
    ctx.stroke();
    canvas.addEventListener("mouseup", my_mouseup); function my_mouseup(e) { mouseEvent = "mouseUp"; } canvas.addEventListener("mouseleave", my_mouseleave); function my_mouseleave(e) { mouseEvent = "mouseleave"; }
    }
}

