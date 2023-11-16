peter_pan_song = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js";
Harry_Potter_Theme_song = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/translations/hi/translation.json";
leftWrist_x = 0;
leftWrist_y = 0
righttWrist_x = 0;
righttWrist_y = 0
scoreleftWrist = 0;
song_Peter_pan = "";

function setup() {
    canvas = createCanvas(600, 530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    //poseNet.on('pose',gotPoses);
}

function draw() {
    image(video,0,0,600,530);

    fill("#0500ff");
    stroke("#ff0000");

    song_Peter_pan = peter_pan_song.isplaying();
    console.log(song_Peter_pan)

    if(scoreleftWrist > 0.2) {
      circle(leftWrist_x,leftWrist_y,20);
      Harry_Potter_Theme_song.stop();
      if(song_Peter_pan == false){
        peter_pan_song
      }
      else{
        document.getElementById("").innerHTML = "Song Name: Peter Pan Song";
      }
    }
}

function preload() {
    peter_pan_song = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/addons/p5.sound.min.js");
    Harry_Potter_Theme_song = loadSound("https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.8.0/translations/hi/translation.json");
}

function modelLoaded() {
    console.log("PoseNet Is initialized");
}

function gotPoses(results) {
if(results.length > 0)
  {
    
    console.log(results);

    scoreleftWrist = results[0].pose.keypoints;
    console.log(scoreleftWrist);

    leftWrist_x = results[0].pose.leftWrist.x;
    leftWrist_y = results[0].pose.leftWrist.y;
    console.log("leftWrist_ = "+leftWrist_x+" leftWrist_y = "+ leftWrist_y);

    rightWrist_x = results[0].pose.rightWrist.x;
    rightWrist_y = results[0].pose.rightWrist.y;
    console.log("rightWrist_ = "+rightWrist_x+" rightWrist_y = "+ rightWrist_y);
  }
}