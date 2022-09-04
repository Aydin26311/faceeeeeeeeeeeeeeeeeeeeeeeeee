//https://teachablemachine.withgoogle.com/models/AQg6DaUI0/

Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snap_shot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img src='"+data_uri+"'id='captured_image'>";
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/AQg6DaUI0/model.json",modelloaded);
function modelloaded(){
    console.log("model loaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
    document.getElementById("resultobjectname").innerHTML=results[0].label;
    document.getElementById("resultobjectaccuracy").innerHTML=results[0].confidence.toFixed(3);

}
}