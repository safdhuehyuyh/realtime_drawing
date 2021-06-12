function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(550, 550);
    canvas.position(560,150);

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    background('#969A97');
}
function modelLoded(){
    console.log('PoseNet Is Initialized!')
}
function gotPoses(results){
    if(results.lenth > 0){
        console.log(results);
    }
}