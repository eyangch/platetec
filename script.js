const w = 1280, h = 720;
var left = ["continental", "oceanic"];
var right = ["continental", "oceanic"];
var gui;

function setup(){
    createCanvas(1280, 720);
    gui = createGui();
    gui.addGlobals("left", "right");
}

function draw(){
    background(255);
    text(left, 50, 50);
    text(right, 50, 100);
    rect(500, 500, 50, 50);
}
