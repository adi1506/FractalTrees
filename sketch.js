var angle = 0;
var slider;

function setup() {
  createCanvas(1200, 650);
  slider = createSlider(0, TWO_PI,PI/4,0.001).size(500);
}

function draw() {
  background(51);
  angle = slider.value();
  stroke(200,120,200);
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
