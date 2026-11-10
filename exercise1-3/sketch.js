let font1;
let font2;
let currentFont;

let message = "Lorem";
let displayedText = "";

async function setup() {
    createCanvas(300, 300);

    frameRate(5);

    font1 = await loadFont("assets/Thicxer-8MerB.ttf");
    font2 = await loadFont("assets/BodyBolds-WpMdY.otf");

    currentFont = font1;

    textSize(60);
    fill(0);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(220);

    let letters = floor((frameCount % 30) / 5);

    displayedText = message.slice(0, letters);

    textFont(currentFont);
    text(displayedText, width / 2, height / 2);
}

function keyPressed() {
    if (key === 'f') {
        if (currentFont === font1) {
            currentFont = font2;
        } else {
            currentFont = font1;
        }
    }
}
