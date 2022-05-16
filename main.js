
Webcam.set({
    width:350,
    height:300,
    Image_format:'heic',
    heic_quality: 100
});

camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}
console.log('ml5 version', ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/djDl0icNl/model.json', modelLoaded);

function modelLoaded(){
    console.log('modelLoaded');
}