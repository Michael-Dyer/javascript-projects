// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load",myFunc);
//document.addEventListener("click", land);

var x;

var flightStatus;
var backGround;
var space_shut;
var land_button; 
var abort_button;
var left;
var right;
var up;
var down;
var rocket;

let pos = {
    x: 0,
    y: 0
}
var top;
var step;
function myFunc(){


var txt;
rocket = document.getElementById("rocket");
top = parseInt(rocket.style.marginTop, 10) || 0,
step = 1;
flightStatus = document.getElementById("flightStatus");
backGround = document.getElementById("shuttleBackground");
space_shut = document.getElementById("spaceShuttleHeight");
land_button = document.getElementById("landing");
abort_button = document.getElementById("missionAbort");

left = document.getElementById("left");
right = document.getElementById("right");
up = document.getElementById("up");
down = document.getElementById("down");

land_button.addEventListener("click",land);
abort_button.addEventListener("click", abort);


left.addEventListener("click", mLeft);
right.addEventListener("click", mRight);
up.addEventListener("click", mUp);
down.addEventListener("click", mDown);

if (confirm("Confirm that the shuttle is ready for takeoff")) {
    flightStatus.innerHTML = "Shuttle in flight";
    backGround.style.background = "blue";


    x = parseInt(space_shut.innerHTML);
    x+=10000;
    console.log(x)
    space_shut.innerHTML = x;
    
  } else {
    txt = "You pressed Cancel!";
  } 
}


function land(){
    alert("The shuttle is landing. Landing gear engaged.");
    flightStatus.innerHTML =  "The shuttle has landed.";
    backGround.style.background = "green";
    x = 0;
    space_shut.innerHTML = x;
    return;
}

function abort(){
    flightStatus.innerHTML =  "Mission aborted.";
    backGround.style.background = "green";
    x = 0;
    space_shut.innerHTML = x;
    return;

}

var u = parseInt(getComputedStyle(rocket).top);
var d;
var l;
var r;



function mUp(){
    x+=10000;
    console.log(x)
    space_shut.innerHTML = x;
    pos.y-=10
    rocket.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
}

function mDown(){
    x-=10000;
    console.log(x)
    space_shut.innerHTML = x;
    pos.y+=10
    rocket.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
}

function mLeft(){
    pos.x-=10
    rocket.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
}

function mRight(){
    pos.x+=10
    rocket.style.transform = `translate(${pos.x}px, ${pos.y}px)`;
}

