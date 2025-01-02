
const density = 'Ñ@#W$9876543210?!abc;:+=-,._';
let gloria;

function preload(){
    gloria = loadImage("perrito.jpg");
}

function setup(){
    createCanvas(400,400);
}

function draw() {
    background(220);
    //image(gloria, 0, 0, width, height);
    let w = width / gloria.width;
    let h = height / gloria.height;
    gloria.loadPixels();
    for (let i=0;i<gloria.width;i++) {
	for (let j=0;j<gloria.height;j++) {
	    const pixelIndex = (i + j * gloria.width) * 4;
	    const r = gloria.pixels[pixelIndex + 0];
	    const g = gloria.pixels[pixelIndex + 1];
	    const b = gloria.pixels[pixelIndex + 2];

	    let avg = (r+g+b)/3;
	    noStroke();
	    fill(r,g,b);
	    //square(i * w, j * h, w);
	    text('G', i+w, j+h);
	}
    }
}


function start() {
    console.log("hello world");
}

start()

