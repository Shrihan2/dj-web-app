scorel=0;
scorer=0;
music1="";
music2="";
lwristy=0;
rwristy=0;
lwristx=0;
rwristx=0;
song1_status="";
song2_status="";
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
    song2_status=music2.isPlaying();
    fill("red");
    stroke("red");
    if(scorel>0.2){
        circle(lwristx,lwristy,20);
        music2.stop();
        if(song2_status==false){
            music1.play();
            music1.rate(1);
            document.getElementById("songname").innerHTML="PigStep";
        }
    }
    song1_status=music1.isPlaying();
    fill("red");
    stroke("red");
    if(scorer>0.2){
        circle(rwristx,rwristy,20);
        music1.stop();
        if(song1_status==false){
            music2.play();
            document.getElementById("songname").innerHTML="AriaMath";
        }
    }
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        scorel=results[0].pose.keypoints[9].score;
        lwristy=results[0].pose.leftWrist.y;
        lwristx=results[0].pose.leftWrist.x;
        console.log("left wrist y is = "+lwristy);
        scorer=results[0].pose.keypoints[10].score;
        rwristy=results[0].pose.rightWrist.y;
        rwristx=results[0].pose.rightWrist.x;
        console.log("right wrist y is = "+rwristy);
    }
}
function play(){
    song.play();
}