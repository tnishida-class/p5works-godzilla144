// チェッカー
function setup() {
  createCanvas(200, 200);
  let size = width / 8;
  noStroke();
  for(let i = 0; i < 8; i++){
    for(let j = 0; j < 8; j++){
      // BLANK[1] (hint: rectのx座標は size * i, y座標はsize * j)
    let k = i + j;
    if(k % 2 == 0){
      fill(255);
    }
    else if (k % 2 == 1){
      fill (200);
    }
    let x = size * i;
    let y = size * j;
    rect(x, y, size, size);

    if(j < 3 && k % 2 == 1){
      fill(255, 0, 0);
    }
    else if(j > 4 && k % 2 == 1){
      fill(0);
    }
    let l = x + size / 2;
    let m = y + size / 2;
    let r = 20;
if(j % 2 == 1){
    ellipse(l, m, r);
  }
  else if(j % 2 == 0){
    ellipse(l, m, r);
    }
  }
    }
  }
