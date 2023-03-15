music1="";
music2="";
function setup(){
    canvas=createCanvas(600,500);
    video=createCapture(VIDEO);
    canvas.center();
    video.hide();
}
function preload(){
    music1=loadSound("music1.mp3");
    music2=loadSound("music2.mp3");
}
function draw(){
    image(video,0,0,600,500);
}