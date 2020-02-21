const w = 640, h = 420;
var tarr = ["continental/continental", "continental/oceanic", "oceanic/oceanic"];
var type = ["continental/continental", "continental/oceanic", "oceanic/oceanic"];
var gui;
var cc, co, oo, ccc, cco, dcc, doo, tccup, tccdown;
var instruc;

function preload() {
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

function setup(){
    createCanvas(w, h);
    gui = createGui();
    gui.addGlobals("type");
gui.setPosition(20, 50);
    instruc = document.createElement("div");
    document.body.appendChild(instruc);
}

function draw(){
    var conv = false, divr = false, utra = false, dtra = false;
    var ox = 0, oy = 0;
    var x = ox, y = oy;
    background(255);
    text(type, 50, 50);
    if(keyIsDown("D".charCodeAt())){
        conv = true;
    }else if(keyIsDown("A".charCodeAt())){
        divr = true;
    }else if(keyIsDown("W".charCodeAt())){
        utra = true;
    }else if(keyIsDown("S".charCodeAt())){
        dtra = true;
    }
    if(conv){
        y += random() * 5;
    }
    if(utra || dtra){
        y += random() * 20;
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
            image(cc, ox, oy);
        }
        instruc.innerHTML = "W/A/S/D are all available for this plate boundary."
    }else if(type == tarr[1]){
        if(conv){
            image(cco, x, y);
        }else{
            image(co, ox, oy);
        }
        instruc.innerHTML = "Only D is available for this plate boundary."
    }else{
        if(divr){
            image(doo, x, y);
        }else{
            image(oo, ox, oy);
        }
        instruc.innerHTML = "Only A is available for this plate boundary."
    }
}
