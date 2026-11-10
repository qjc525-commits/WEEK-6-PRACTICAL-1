let font1;
let font2;
let currentFont;

async function setup() {
    createCanvas(300, 300);

    font1 = await loadFont("assets/Thicxer-8MerB.ttf");
    font2 = await loadFont("assets/BodyBolds-WpMdY.otf");

    currentFont = font1;

    textSize(60);
    fill(0);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(220);

    textFont(currentFont);
    text("Lorem", width / 2, height / 2);
}

function keyPressed() {
    if (key === 'f') {
        currentFont = currentFont === font1 ? font2 : font1;
    }
}
