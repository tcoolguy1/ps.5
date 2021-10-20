function preload() {
}

function setup() {
canvas = createCanvas(640, 480);
canvas.position(110, 250);
video = createCapture(VIDEO);
video.hide();
}

function draw() {
image(video, 230, 150, 200, 250);
fill(0,150,0);
stroke(0,0,100);
circle(30, 30, 30);

circle(600,30,30)

rect(25, 20,  580, 20);

circle(30, 450, 30);

circle(600,450  ,30)

rect(25, 440,  580, 20);

}

function take_snapshot() {
save('Myself.png');
}
