class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    
    if(this.body.position.x>200 && this.body.velocity.x > 10){
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);   //trajectory = [[200,50],[201,49],[202,48],[206,45]....[300,30]]
    }
    for(var i = 0; i<this.trajectory.length;i++ )

      image(this.smokeImage,this.trajectory[i][0],this.trajectory[i][1]);

  }
}
