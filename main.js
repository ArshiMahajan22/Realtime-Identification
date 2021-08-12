function setup() {
  canvas = createCanvas(250, 250);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();

  //Initialize MobileNet
  classifier = ml5.imageClassifier('MobileNet', modelloaded);
}

function modelloaded(){
  console.log('Model is Loaded');
}

function draw(){
  image(video, 0, 0, 250, 250);
  classifier.classify(video, gotResult);
}

function gotResult(error, results){
  if (error) {
    console.error(error);
  }
  else {
    console.log(results);
    document.getElementById('Object').innerHTML = results[0].label;
    document.getElementById('Confidence').innerHTML = results[0].confidence.toFixed(3) * 100 + "%";
  }
}
