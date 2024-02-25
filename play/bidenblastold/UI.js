export class UI {
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = "Dosis";
        this.livesImage = document.getElementById("lives");
    }
    draw(context){
        context.save();
        //lives
        for (let i = 0; i < this.game.lives; i++){
            context.drawImage(this.livesImage, 27 * i + 20, 60, 25, 25);
        }
        context.font = "bold " + this.fontSize + "px " + this.fontFamily;
        context.textAlign = "left";
        context.fillStyle = this.game.fontColor;
        //score
        context.fillText("Score: " + this.game.score, 20, 50);
        //timer
        context.font = "bold " + this.fontSize + "px " + this.fontFamily;
        context.textAlign = "left";
        context.fillText("Time: " + (this.game.time * 0.001).toFixed(2), this.game.width - 150, 50);
        //game over messages
        if (this.game.gameOver){
            context.textAlign = "center";
            context.font = "bold " + this.fontSize * 2 + "px " + this.fontFamily;
            if (this.game.score > this.game.winningScore){
                context.fillText("BIDEN BLAST!", this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = "bold " + this.fontSize * 0.8 + "px " + this.fontFamily;
                context.fillText("You managed to Blast the traitors of democracy!", this.game.width * 0.5, this.game.height * 0.5 + 20);
                document.getElementById("nextButton").style.display = 'block';
            } else {
                context.fillText("OBAMA ABSORB", this.game.width * 0.5, this.game.height * 0.5 - 20);
                context.font = "bold " + this.fontSize * 0.8 + "px " + this.fontFamily;
                context.fillText("Dark Brandon has been defeated!", this.game.width * 0.5, this.game.height * 0.5 + 20);
            }
        }
        context.restore();
    }
}