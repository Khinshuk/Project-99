var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition;

function start(){
    recognition.start();
}

recognitiononresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    speak();
}

function speak(){
    var synth = window.SpeechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis =newSpeechSythesisUttarence;
    synth.speak(utterthis);
    Webcam.attach(camera);
}

Webcam.set({
    width: 400,
    height: 250,
    image_format: 'png',
    png_quality: 90
});

camera=document.getElementById("camera");