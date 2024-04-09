// https://editor.p5js.org/AlexWang/sketches/dXQIuYDv

var sound1, sound2, sound3, sound4, sound5, sound6, sound7, sound8;

function preload() {
    sound1 = loadSound('sounds/11_Stereo.wav');
    sound2 = loadSound('sounds/22_Stereo.wav');
    sound3 = loadSound('sounds/33_Stereo.wav');
    sound4 = loadSound('sounds/44_Stereo.wav');
    sound5 = loadSound('sounds/55_Stereo.wav');
    sound6 = loadSound('sounds/66_Stereo.wav');
    sound7 = loadSound('sounds/77_Stereo.wav');
    sound8 = loadSound('sounds/88_Stereo.wav');
}

function setup() {
    createCanvas(500, 500);
}

function draw() {
    background(255);
    textSize(16);
    fill(0);
    text('Press any key, A to K in QWERTY keyboard, and turn up speakers', 12, 250);

    let green = color(91, 188, 56);
    let red = color(212, 47, 62);
    let black = color(9, 9, 11);
    let purple = color(157, 68, 220);
    let blue = color(134, 219, 213);
    let yellow = color(244, 230, 91);
    let pink = color(245, 199, 231);

    if (keyCode == 83) {
        // Sound2
        let playhead2 = sound2.currentTime();
        let angle = map(playhead2, 0, sound2.duration(), 0, HALF_PI);
        push();
        fill(black);
        circle(250, 250, 10);
        translate(250, 250);
        rotate(angle);
        fill(red);
        noStroke();
        triangle(120, 300, 238, 80, 344, 300);
        rotate(angle * 2);
        fill(pink);
        noStroke();
        triangle(120, 300, 238, 80, 344, 300);
        rotate(angle * 2);
        fill(red);
        noStroke();
        triangle(120, 300, 238, 80, 344, 300);
        rotate(angle * 2);
        fill(green);
        noStroke();
        triangle(120, 300, 238, 80, 344, 300);
        rotate(angle * 2);
        fill(pink);
        noStroke();
        triangle(60, 150, 118, 40, 172, 150);
        rotate(angle);
        fill(blue);
        noStroke();
        triangle(60, 150, 118, 40, 172, 150);
        rotate(angle);
        fill(yellow);
        noStroke();
        triangle(60, 150, 118, 40, 172, 150);
        rotate(angle);
        fill(blue);
        noStroke();
        triangle(60, 150, 118, 40, 172, 150);
        rotate(angle);
        fill(pink);
        noStroke();
        triangle(60, 150, 118, 40, 172, 150);
        rotate(angle);
        fill(purple);
        noStroke();
        triangle(30, 75, 58, 20, 86, 75);
        rotate(angle);
        fill(green);
        noStroke();
        triangle(30, 75, 58, 20, 86, 75);
        rotate(angle);
        fill(pink);
        noStroke();
        triangle(30, 75, 58, 20, 86, 75);
        rotate(angle);
        fill(green);
        noStroke();
        triangle(30, 75, 58, 20, 86, 75);
        rotate(angle);
        fill(yellow);
        noStroke();
        triangle(30, 75, 58, 20, 86, 75);
        pop();
    } else if (keyCode == 65) {
        // Sound1
        let playhead = sound1.currentTime();
        let y = map(playhead, 0, sound1.duration(), -400, 0);
        fill(red);
        noStroke();
        rect(225, y, 40, 400);
        let y2 = map(playhead, 0, sound1.duration(), -300, 0);
        fill(black);
        noStroke();
        rect(125, y2, 40, 300);
        let y3 = map(playhead, 0, sound1.duration(), -170, 0);
        fill(purple);
        noStroke();
        rect(25, y3, 40, 170);
        let y4 = map(playhead, 0, sound1.duration(), -240, 0);
        fill(blue);
        noStroke();
        rect(325, y4, 40, 240);
        let y5 = map(playhead, 0, sound1.duration(), -250, 0);
        fill(black);
        noStroke();
        rect(425, y5, 40, 250);
    } else if (keyCode == 68) {
        // Sound3
        let myArray = [100, 200, 300, 400, 500];
        var offset = 0;
        for (var x = 0; x <= width; x += 80) {
            for (var y = 0; y <= height; y += 40) {
                noStroke();
                let playhead3 = sound3.currentTime();
                noStroke();
                let y6 = map(playhead3, 0, sound3.duration(), -100, width);
                fill(0, 0, x - 150);
                rect(x, y + offset, 20, y6 + 100);
                fill(yellow)
                circle(y6, 250, 50);
                fill(pink)
                noStroke();
                circle(y6, 100, 50);
                fill(red)
                noStroke();
                circle(y6, 400, 50);
                let y7 = map(playhead3, 0, sound3.duration(), 525, -25);
                fill(red)
                noStroke();
                circle(100, y7, 50);
                fill(pink)
                noStroke();
                circle(250, y7, 50);
                fill(yellow)
                noStroke();
                circle(400, y7, 50);
            }
        }
    } else if (keyCode == 70) {
        // Sound4
        let playhead4 = sound4.currentTime();
        let y8 = map(playhead4, 0, sound4.duration(), 0, width);
        let y9 = map(playhead4, 0, sound4.duration(), height + 20, 0);
        let k = map(playhead4, 0, sound4.duration(), 500, 0);
        let i = map(playhead4, 0, sound4.duration(), 400, 0);
        let o = map(playhead4, 0, sound4.duration(), 30, 0);
        let p = map(playhead4, 0, sound4.duration(), 80, 0);
        let w = map(playhead4, 0, sound4.duration(), 300, 0);
        let q = map(playhead4, 0, sound4.duration(), 100, 0);
        let t = map(playhead4, 0, sound4.duration(), 400, 0);
        noStroke();
        fill(pink);
        circle(250, 250, k * 10);
        fill(blue);
        circle(250, 250, k * 8);
        fill(0, 0, 225);
        circle(250, 250, k * 7);
        fill(green);
        circle(250, 250, k * 6);
        fill(purple);
        circle(250, 250, k * 5);
        fill(pink);
        circle(250, 250, k * 4);
        fill(255);
        circle(250, 250, k * 2.7);
        fill(yellow);
        circle(250, 250, k * 1.5);
        fill(black);
        circle(250, 250, k);
        fill(0, 0, 225);
        rect(y8 - 10, y9 - 10, 40, 40);
    } else if (keyCode == 71) {
        // Sound5
        let playhead5 = sound5.currentTime();
        let y9 = map(playhead5, 0, sound5.duration(), -250, 0);
        noStroke();
        fill(green);
        rect(0, y9, 500, 250);
        let y10 = map(playhead5, 0, sound5.duration(), 500, 250);
        fill(black);
        rect(0, y10, 500, 250);
        let y11 = map(playhead5, 0, sound5.duration(), -500, 0);
        fill(yellow);
        rect(y11, 250, 500, 20);
        fill(red);
        rect(y11, 230, 500, 20);
        fill(blue);
        rect(y11, 270, 500, 20);
        fill(pink);
        rect(y11,        210, 500, 20);
        fill(purple);
        rect(y11, 290, 500, 20);
    } else if (keyCode == 72) {
        // Sound6
        let playhead6 = sound6.currentTime();
        let y12 = map(playhead6, 0, sound6.duration(), 0, 100);
        noStroke();
        fill(red);
        circle(250, 250, y12 * 10);
        fill(blue);
        circle(250, 250, y12 * 8);
        fill(0, 0, 225);
        circle(250, 250, y12 * 7);
        fill(green);
        circle(250, 250, y12 * 6);
        fill(purple);
        circle(250, 250, y12 * 5);
        fill(pink);
        circle(250, 250, y12 * 4);
        fill(255);
        circle(250, 250, y12 * 2.7);
        fill(yellow);
        circle(250, 250, y12 * 1.5);
        fill(black);
        circle(250, 250, y12);
    } else if (keyCode == 74) {
        // Sound7
        let myArray = [100, 200, 300, 400, 500];
        var offset = 0;
        for (var x = 0; x <= width; x += 80) {
            for (var y = 0; y <= height; y += 40) {
                noStroke();
                let playhead7 = sound7.currentTime();
                noStroke();
                let y14 = map(playhead7, 0, sound7.duration(), -100, width);
                fill(0, 0, x - 150);
                rect(x, y + offset, 20, y14 + 100);
                fill(yellow)
                circle(y14, 250, 50);
                fill(pink)
                noStroke();
                circle(y14, 100, 50);
                fill(red)
                noStroke();
                circle(y14, 400, 50);
                let y15 = map(playhead7, 0, sound7.duration(), 525, -25);
                fill(red)
                noStroke();
                circle(100, y15, 50);
                fill(pink)
                noStroke();
                circle(250, y15, 50);
                fill(yellow)
                noStroke();
                circle(400, y15, 50);
            }
        }
    } else if (keyCode == 75) {
        // Sound8
        let playhead8 = sound8.currentTime();
        let y16 = map(playhead8, 0, sound8.duration(), 0, 90);
        let myArray = [100, 200, 300, 400, 500];
        var offset = 0;
        for (var x = 0; x <= width; x += 80) {
            for (var y = 0; y <= height; y += 40) {
                noStroke();
                let playhead8 = sound8.currentTime();
                noStroke();
                let y17 = map(playhead8, 0, sound8.duration(), -100, width);
                fill(0, 0, x - 150);
                rect(x, y + offset, 20, y17 + 100);
                fill(yellow)
                circle(y17, 250, 50);
                fill(pink)
                noStroke();
                circle(y17, 100, 50);
                fill(red)
                noStroke();
                circle(y17, 400, 50);
                let y18 = map(playhead8, 0, sound8.duration(), 525, -25);
                fill(red)
                noStroke();
                circle(100, y18, 50);
                fill(pink)
                noStroke();
                circle(250, y18, 50);
                fill(yellow)
                noStroke();
                circle(400, y18, 50);
            }
        }
    }
}
