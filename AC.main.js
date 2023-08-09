AC_img="";
Status="";

function preload()
{
    AC_img=loadImage('AC.jpg');
}

function setup()
{
    canvas=createCanvas(640,350);
    canvas.position(600,200);
    object_detector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status:Detecting Object";
}

function modelLoaded()
{
    console.log("Model is Loaded");
    Status=true;
    object_detector.detect(AC_img,gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
    }
}

function draw()
{
    image(AC_img,0,0,640,350);
}