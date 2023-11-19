let LivingCreature = require('./LivingCreature ')

module.exports = class GrassEater extends LivingCreature {
    constructor(x, y, ){
        super(x, y, );
        this.energy = 8
    }


 
    move() {
        this.energy--
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }
    mul(){
        this.multiply++;
        let emptyCell = this.chooseCell(0);
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)](emptyCell);

        if(newCell && this.multiply >= 4){
            let newX = newCell[0];
            let newY = newCell[1];
            matrix[newY][newX] = 1;
            let newGrass = new Grass(newX, newY);
            grassArray.push(newGrass);
            this.multiply = 0;
        }
    }
    eat() {
        let foods = this.chooseCell(1)
        let food = foods[Math.floor(Math.random() * foods.length)]
        if (food) {
            this.energy++;

            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 2
            this.x = newX
            this.y = newY
            for (var i in grassArray) {
                if (newX == grassArray[i].x && newY == grassArray[i].y) {
                    grassArray.splice(i, 1);
                    break;
                }
            }
            if (this.energy >= 10) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }
  
    mul() {
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]

        if (newCell ) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 2

            let grEat = new GrassEater(newX, newY)

            grassEaterArr.push(grEat)


        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in grassEaterArr) {
            if (this.x == grassEaterArr[i].x && this.y == grassEaterArr[i].y) {
                grassEaterArr.splice(i, 1);
                break;
            }
        }
    }

}