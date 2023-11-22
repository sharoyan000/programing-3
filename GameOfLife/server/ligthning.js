const GrassEater = require("./grassEater");

module.exports = class Lightning {
    constructor(x, y) {
        super(x, y, );
        this.energy = 3
 

    }

    appear(){  
        
        chooseCell(0,2,3,4,5)

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

    eat() {
        let foods = this.chooseCell(1)
        let food = foods[Math.floor(Math.random() * foods.length)]
        if (food) {
            this.energy++;

            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 1
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
                    break;
                }
            }

            for (var i in predatorArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            for (var i in predatorArr) {
                if (newX == grassEaterArr[i].x && newY == grassEaterArr[i].y) {
                    grassEaterArr.splice(i, 1);
                    break;
                }
            }

            for (var i in heroArr) {
                if (newX == heroArr[i].x && newY == heroArr[i].y) {
                    heroArr.splice(i, 1);
                    break;
                }
            }           
            



            if (this.energy >= 450) {
                this.mul()
            }
        }
        else {
            this.move()
        }
    }

}
