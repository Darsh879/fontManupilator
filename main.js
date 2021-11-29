noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 500);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function modalLoaded()
{
    console.log("posenet is initialized");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
     console.log(results);
     noseX = results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     leftWristX = results[0].pose.leftWrist.x;
     rightWristX = results[0].pose.rightWrist.x;
     difference = floor(leftWristX - rightWristX);  
    }
}

function draw()
{
    background('#969A97');
    fill('pink');
    stroke('pink');
document.getElementById("text_side").innerHTML = "width and height of the text is = " + difference + "px";
textSize(difference);
text("darsh", noseX, noseY, difference);
}
