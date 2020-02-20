const w = 1280, h = 720;
var tarr = ["continental/continental", "continental/oceanic", "oceanic/oceanic"];
var type = ["continental/continental", "continental/oceanic", "oceanic/oceanic"];
var gui;
var cc, co, oo;

function setup(){
    createCanvas(640, 480);
    gui = createGui();
    gui.addGlobals("type");
    cc = loadImage("https://eyangch.github.io/platetec/img/cc.png");
    co = loadImage("https://eyangch.github.io/platetec/img/co.png");
    oo = loadImage("https://eyangch.github.io/platetec/img/oo.png");
    ccc = loadImage("https://eyangch.github.io/platetec/img/ccc.png");
    cco = loadImage("https://eyangch.github.io/platetec/img/cco.png");
    dcc = loadImage("https://eyangch.github.io/platetec/img/dcc.png");
    doo = loadImage("https://eyangch.github.io/platetec/img/doo.png");
    tccup = loadImage("https://eyangch.github.io/platetec/img/tccup.png");
    tccdown = loadImage("https://eyangch.github.io/platetec/img/tccdown.png");
}

function draw(){
    var conv = false, divr = false, utra = false, dtra = false;
    var x = 0, y = 0;
    background(255);
    text(type, 50, 50);
    if(keyIsDown(RIGHT_ARROW)){
        conv = true;
    }else if(keyIsDown(LEFT_ARROW)){
        divr = true;
    }else if(keyIsDown(UP_ARROW)){
        utra = true;
    }else if(keyIsDown(DOWN_ARROW)){
        dtra = true;
    }
    if(conv){
        y = random() * 5;
    }
    if(utra || dtra){
        y = random() * 20;
    }
    if(type == tarr[0]){
        if(conv){
            image(ccc, x, y);
        }else if(divr){
            image(dcc, x, y);
        }else if(utra){
            image(tccup, x, y);
        }else if(dtra){
            image(tccdown, x, y);        
        }else{
            image(cc, 0, 0);
        }
    }else if(type == tarr[1]){
        if(conv){
            image(cco, x, y);
        }else{
            image(co, 0, 0);
        }
    }else{
        if(divr){
            image(doo, x, y);
        }else{
            image(oo, 0, 0);
        }
    }
}
