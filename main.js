function setup(){
    canvas = createCanvas(250, 250);
    canvas.position(515, 325);
    video = createCapture(VIDEO);
    video.hide();
    video.size(250, 250);

    //Initialize Model
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ptuN-BolL/model.json', modelLoaded);
}

function draw(){
    image(video, 0, 0, 250, 250);
    classifier.classify(video, gotResult);
}

function modelLoaded(){
    console.log("Model is Loaded");
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("Object").innerHTML = results[0].label;
        document.getElementById("Confidence").innerHTML = results[0].confidence.toFixed(3) * 100 + "%";
    }
}