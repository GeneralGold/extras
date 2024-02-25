export class FloatingMessage {
    constructor(value, x, y, targetX, targetY){
        this.value = value;
        this.x = x;
        this.y = y;
        this.targetX = targetX;
        this.targetY = targetY;
        this.markedForDeletion = false;
        this.timer = 0;
    }
    update(){
        this.x += (this.targetX - this.x) * 0.03;
        this.y += (this.targetY - this.y) * 0.03;
        this.timer++;
        if (this.timer > 100) this.markedForDeletion = true;
    }
    draw(context){
        context.font = "bold 21px Dosis";
        context.fillStyle = "lime";
        context.fillText(this.value, this.x, this.y);
        context.font = "bold 23px Dosis";
        context.fillStyle = "black";
        context.fillText(this.value, this.x, this.y);
    }
}