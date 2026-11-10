let word = "Lorem ipsum dolor sit amet"

function setup() {
    createCanvas(600,600);
}

function draw() {
    background(0,0,180);
    textSize(60)
    textAlign(RIGHT,BOTTOM)
    fill(0,0,100)
    text(word, 300, 300, 300, 320)
}
