Webcam.set({
width:350,
length:300,
image_format:'png',
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function snap() {
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
  });  
}
console.log('ml5 version',ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json',modelLoaded);
function modelLoaded() {
    console.log('Model Loaded!')
}
function speak() {
    var synth=window.speechSynthesis;
    speak_data_1="the first preduction is"+preduction_1;
    speak_data_2="and the second preduction is"+preduction_2;
    var utterThis=new SpeechSynthesisUtterance(speak_data_1+speak_data_2);
    synth.speak(utterThis); 
}