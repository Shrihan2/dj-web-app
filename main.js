music1="";
music2="";
lwristy=0;
rwristy=0;
function setup(){
    canvas=createCanvas(600,500);
    video=createCapture(VIDEO);
    canvas.center();
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model loaded!");
}
function preload(){
    music1=loadSound("music1.mp3");
    music2=loadSound("music2.mp3");
}
function draw(){
    image(video,0,0,600,500);
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lwristy=results[0].pose.leftWrist.y;
        console.log("left wrist y is = "+lwristy);
        rwristy=results[0].pose.rightWrist.y;
        console.log("right wrist y is = "+rwristy);
    }
}
function play(){
    song.play();
}
