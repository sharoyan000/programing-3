 module.exports = class LivingCreature {
    constructor(x, y) {
    this.x = x;
    this.y = y;
    this.multiple = 0;
    
    this.directions = [
    [this.x - 1, this.y - 1],
    [this.x, this.y - 1],
    [this.x + 1, this.y - 1],
    [this.x - 1, this.y],
    [this.x + 1, this.y],
    [this.x - 1, this.y + 1],
    [this.x, this.y + 1],
    [this.x + 1, this.y + 1]
    ];
    }
    
    chooseCell(char, car2,car3,car4,car5) {
    let found = [];
    for (let i = 0; i < this.directions.length; i++) {
    let x = this.directions[i][0];
    let y = this.directions[i][1];
    if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
    if (matrix[y][x] == char || matrix[y][x] == car2 || matrix[y][x] == car3|| matrix[y][x] == car4|| matrix[y][x] == car5) {
    found.push(this.directions[i])
    }
    
    }
    }
    
    return found;
    }
    }