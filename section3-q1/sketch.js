// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("I love Kenshi Yonedzu", 100, 255);
}

function balloon(t, cl, txcl){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 2;
  fill(cl);
  rect(0, 0, w + p * 2, h + p * 2);
  fill(txcl);
  text(t, p, h + p);
  fill(cl);
  triangle(w + p, h + p, w + p - 10, h + p, w + p, h + p + 10);
}
