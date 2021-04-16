var angle = 0;
var slider;
var r,g,b;

function setup() {
  createCanvas(1200, 650);
  textSize(15);
  
  
  slider = createSlider(0, TWO_PI,PI/4,0.001);
  slider.position(20,110);
  r = createSlider(0,255,230,1);
  r.position(20,20);
  g = createSlider(0,255,230,1);
  g.position(20,50);
  b = createSlider(0,255,0,1);
  b.position(20,80);
  
}

function draw() {
  
  background(51);
  noStroke();
  fill(255,0,0);
  text('red', r.x * 2 + r.width, 35);
  fill(0,255,0);
  text('green', g.x * 2 + g.width, 65);
  fill(0,0,255);
  text('blue', b.x * 2 + b.width, 95);
  fill('white');
  text('customize', slider.x * 2 + slider.width, 125);

  
  angle = slider.value();
  stroke(r.value(),g.value(),b.value());
  translate(width/2,height);
  branch(200);
  
}

function branch(len)
{
  line(0,0,0,-len); 
  translate(0,-len);
  
  if(len > 4)
  {
    push();
    rotate(angle);
    branch(len *0.67);
    pop();
    rotate(-angle);
    branch(len*0.67);
  }
  // line(0,0,0,-len *0.67);
  // rotate(-PI/2);
  // line(0,0,0,-len * 0.67);
  //branch(len * 0.67);
  

}
