var hr,min,sec














function setup() {
  createCanvas(1350,650);
  angleMode (DEGREES)
}

function draw() {

  hr = hour();
  min = minute();
  sec = second();

scAngle = map(sec, 0, 60, 0, 360);
scMin = map(min,0,60,0,360);
scHour= map(hr % 12,0,12,0,360);


background(0,0,0);

textAlign(CENTER)

fill(255,255,255);
textSize(18);
text("12",600,120);

text("3",780,300);


text("6",600,480);

text("9",410,300);

translate(600,300);
rotate(-90)
push();
rotate(scAngle); //rotate the hand based on angle calculated
stroke(255,0,0);
strokeWeight(10);
line(0,0,160,0);
pop()
push();
rotate(scMin); //rotate the hand based on angle calculated
stroke(0,255,0);
strokeWeight(10);
line(0,0,110,0);
pop()
push();
rotate(scHour); //rotate the hand based on angle calculated
stroke(0,0,255);
strokeWeight(10);
line(0,0,70,0);
pop()


noFill();
stroke(255,0,0);
strokeWeight(10);
arc(0,0,480,480,0,scAngle);
//Minutes
strokeWeight(7);
stroke(0,255,0);
arc(0,0,450,450,0,scMin);
//Hour
strokeWeight(7);
stroke(0,0,255);
arc(0,0,420,420,0,scHour);


  drawSprites();
}