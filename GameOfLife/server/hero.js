let LivingCreature = require('./LivingCreature ')
module.exports = class  Hero extends LivingCreature {
    constructor(x,y){
  super(x,y)
        this.energy = 40

    }
   
    
    
    move() {
        this.energy--
        let emptyCells = this.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }
   
    mul() {
        let emptyCell = this.chooseCell(0)
        let newCell = [Math.floor(Math.random() * emptyCells.length)(emptyCells)](emptyCell)

        if (newCell ) {
            let newX = newCell[0]
            let newY = newCell[1]

            matrix[newY][newX] = 4

            let hr = new Hero(newX, newY)
            heroArr.push(hr)


        }
    }

    eat() {
        let foods = this.chooseCell(3)
        let food = foods[Math.floor(Math.random() * foods.length)]
        if (food) {
            this.energy++;

            matrix[this.y][this.x] = 0
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
            for (var i in predatorArr) {
                if (newX == predatorArr[i].x && newY == predatorArr[i].y) {
                    predatorArr.splice(i, 1);
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

    



    die() {
       
        matrix[this.y][this.x] = 0;
        for (var i in heroArr) {
            if (this.x == heroArr[i].x && this.y == heroArr[i].y) {
               heroArr.splice(i, 1);
                break;
            }
        }
    }

}