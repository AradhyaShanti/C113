

function preload() {
}

function setup() {
    canvas = createCanvas(355, 355);
    canvas.position(457, 140);
    video = createCapture(VIDEO);
    video.hide();
    
    shape = "";
}

function draw() {
    image(video, 0, 0, 660, 470);

    shape(shape);
}

function take_snapshot() {
    save('Aradhya.jpg');
}
function filter_shape()
{
    shape = document.getElementById("shape").value;
    if ((shape == "circle")) {
        circle(35, 28, 60);
        circle(35, 320, 60);
        circle(325, 320, 60);
        circle(325, 28, 60);
        describe('red circle with black outline in mid of gray canvas');
    }
    else if (shape == "rectangle") {
        rect(20, 57, 25, 235);
        rect(315, 55, 25, 235, 20);
        rect(64, 6, 235, 35, 20, 15, 10);
        rect(64, 315, 235, 25);
        describe('green rect with black outline in mid-right of canvas');
    }
}