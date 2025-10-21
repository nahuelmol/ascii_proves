
const density = 'Ñ@#W$9876543210?!abc;:+=-,._';
let gloria;

function preload(){
    gloria = loadImage("perrito.jpg");
}

function setup(){
    createCanvas(600,400);
    textFont('monospace', 8);
    textAlign(CENTER, CENTER);
    noLoop();
}

function draw() {
    background(220);
    gloria.resize(80, 0);
    gloria.loadPixels();
    
    let w = width / gloria.width;
    let h = height / gloria.height;
    //image(gloria, 0, 0, width, height);
    for (let i=0;i<gloria.width;i++) {
        for (let j=0;j<gloria.height;j++) {
            const pixelIndex = (i + j * gloria.width) * 4;
            const r = gloria.pixels[pixelIndex + 0];
            const g = gloria.pixels[pixelIndex + 1];
            const b = gloria.pixels[pixelIndex + 2];

            let avg = (r + g + b)/3;
            let len = density.length;
            const charIdx = floor(map(avg, 0, 255, 0, len - 1));
            const c = density.charAt(charIdx);
            //noStroke();
            //fill(r,g,b);
            //square(i * w, j * h, w);
            //text('G', i+w, j+h);
            fill(255);
            text(c, i * w, j * h);
        }
    }
}

