var g = 0.1;
var wv = 0.01;
var noff = 0;


var sheet = [];
var floats = [];


function setup(){
	createCanvas(windowWidth*0.98,windowHeight*0.98);
	for(var i=0;i<200;i++){
		sheet[i] = new Drop();
	}
	for(var i=0;i<5;i++){
		floats[i] = new Floater();
	}
	noStroke();
    frameRate(25);
}

function draw(){
	noStroke();
	fill(0,0,50,180);
	rect(0,0,width,height);
	for(var i=0;i<200;i++){
		sheet[i].update();
		sheet[i].show();
	}
	for(var i=0;i<5;i++){
		floats[i].show();
	}
}



Drop = function(){
	this.vx = 2;
	this.x = random(-150*this.vx,width-50*this.vx);
	this.y = random(-800,-100);

	this.wid = random(1,5);
	this.vy = 2*this.wid+5;
	this.show = function(){
		fill(255,130);
		ellipse(this.x,this.y,7,7);
	}

	this.update = function(){
		this.vy += g;
		this.vx += wv;
		this.y += this.vy;
		this.x += this.vx;
		if(this.y > height || this.x < 0 || this.x > width){
			this.x = random(-150*this.vx,width-50*this.vx);
			this.vy = 2*this.wid+5;
			this.vx = 2;
			this.y = random(-30,100);
		}
	}
}

Floater = function(){
	this.x1 = random(width-100);
	this.x2 = this.x1+100;

	this.show = function(){
		stroke(255);
		noFill();
		// Make a full perlin path across the field
		// Display a particular segment of it each time, advance by a bit
	}

}
