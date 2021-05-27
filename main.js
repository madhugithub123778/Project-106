Webcam.set({
width: 350,
heigth:300,
image_format: "png",
png_quality: 90});

camera = document.getElementById("camera");

Webcam.attach(camera);

function snap(){
Webcam.snap(function(data_uri)
{
document.getElementById("result").innerHTML = '<img id="cap_img"src="'+data_uri+'"/>';})
}

console.log("ml5 version is",ml5.version);

identifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pMRbkCk-H/model.json",modelLoaded);

function modelLoaded(){
console.log("Model Loaded!");}

function speak(){
var synth = window.speechSynthesis;
var speech_1 = "The first prediction is "+ prediction_1;
var speech_2 = "And the second prediction is "+prediction_2;
var utterThis = new SpeechSynthesisUtterance(speech_1 + speech_2);
synth.speak(utterThis);}

function check(){
image_1 = document.getElementById("cap_img");
identifier.classify(image_1, gotResult);}


function gotResult(error, results){
if (error){
console.error(error);}

if(results){
console.log(results);
document.getElementById("gesture_1").innerHTML = results[0].label;
document.getElementById("gesture_2").innerHTML = results[1].label;
prediction_1 = results[0].label;
prediction_2 = results[1].label;
speak();

if (results[0].label == "Superb"){
document.getElementById("emoji_1").innerHTML = "&#128076;";}

if (results[0].label == "Thumbs Up"){
document.getElementById("emoji_1").innerHTML = "&#128077;";}

if (results[0].label == "High Five"){
document.getElementById("emoji_1").innerHTML = "&#128400;";}

if (results[1].label == "Superb"){
document.getElementById("emoji_2").innerHTML = "&#128076;";}

if (results[1].label == "Thumbs Up"){
document.getElementById("emoji_2").innerHTML = "&#128077;";}

if (results[1].label == "High Five"){
document.getElementById("emoji_2").innerHTML = "&#128400;";}

}


}

