class Particle {
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.dx = random(-10,10);
    this.dy = random(-10,10);
  }
  
   update() {
     let paused = false;
     let dx2;
     let dy2;
    if(keyIsPressed===false){
    this.x += this.dx;
    this.y += this.dy;
    }  
    
    if(this.x>=width||this.x<0) {
      this.dx *= -1;
    }
     
    if(this.y>=height||this.y<0) {
      this.dy *= -1;
    }
     
    if(keyIsDown(32)&&paused===false){{
      dx2=this.dx;
      dy2= this.dy
      this.dx = 0;
      this.dy = 0;
      paused=true;
    }
   if(keyIsDown(32)&&paused===true){
     this.dx=dx2
     this.dy=dy2
     paused=false
   }
   }
    if(keyIsDown(UP_ARROW)){
      this.dx+=1
      this.dy+=1
    }
    else if(keyIsDown(DOWN_ARROW)){
      this.dx/=2
      this.dy/=2
    }
  }
}
