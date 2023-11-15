let LivingCreature = require('./LivingCreature')

module.exports = class  GrassGenerator  extends LivingCreature  {
    constructor(x, y) {
        this.x = x
        this.y = y
       
        this.directions = [];
    }
    
    
    move() {
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 5
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }
      

    mul(){
        let emptyCell = this.chooseCell(0);
        let newCell = random(emptyCell);
        if(newCell ){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
            let newGrass = new Grass(newX, newY);
            grassArray.push(newGrass);

            console.log(grassArray.length);
            if(grassArray.length >= 100){
                matrix[newY][newX] = 3;
                let newGrass = new Predator(this.x, this.y);
                predatorArr.push(newGrass);
                    this.die()

            }
        }
    }


    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassGeneratorArr) {
            if (this.x == grassGeneratorArr[i].x && this.y == grassGeneratorArr[i].y) {
               grassGeneratorArr.splice(i, 1);
                break;
            }
        }
    }
}