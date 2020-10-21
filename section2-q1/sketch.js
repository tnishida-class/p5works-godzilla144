// 小手調べ
function setup(){
  for(let i = 5; i < 55; i = i + 5){
   // BLANK[1]
noFill();
 if(i < 30){
   stroke(0, 0, 255);
 }
 else{
   stroke(255, 0, 0);
 }
   ellipse(50, 50, i);
  }
}
