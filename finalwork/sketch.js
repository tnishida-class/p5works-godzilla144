// 最終課題を制作しよう
let p, q, x, y, vx, vy;
var a = x / 2

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 2;
  vy = 2;
  p = width / 2;
  q = height / 2;
}


function draw(){
  push();
  background(0);
  noStroke();
  fill(255);
  text("Ping Pong Game!", x, height / 4);
  text("Click SPACE to reset your racket", width / 2, height / 6 * 5);
  text("Use arrow key (←＆→) to move your racket", width / 2, height / 12 * 11);
  rect(p - 50, q + 100, 100, 20);
  if(keyIsDown(LEFT_ARROW)){ p -= 5; } //左矢印キーでラケットを左へ
  if(keyIsDown(RIGHT_ARROW)){ p += 5; } //右矢印キーでラケットを右へ
  ellipse(x, y, 30);
// 速度
  x += vx;
  y += vy;
// 跳ね返り
  if(x < 0 || x > width){ vx = -1 * vx; }
  if(y < 0 || y > height){ vy = -1 * vy; }
  if(x < p + 50 && x > p - 50 && y > q + 100){ vx = +1 * vx, vy = -1 * vy; }
  // if(x > p - 50 && y > q + 100){ vx = +1 * vx, vy = -1 * vy; }
// x座標、y座標を画面内に
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
  pop();
}

 function keyPressed(){ //スペースキーでラケットの位置リセット
   if(key == " "){ p = width / 2, q = height / 2; }
   }



function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
