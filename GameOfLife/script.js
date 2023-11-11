function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, HeroCount,GrassGeneratorCount) {
        let matrix = [];
        for (let i = 0; i < matrixSize; i++) {
                matrix.push([]);
                for (let j = 0; j < matrixSize; j++) {
                        matrix[i].push(0);
                }
        }

        for (let i = 0; i < grassCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                matrix[y][x] = 1
        }


        for (let i = 0; i < grassEaterCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                matrix[y][x] = 2
        }


        for (let i = 0; i < predatorCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if (matrix[y][x] == 0) {
                        matrix[y][x] = 3
                        console.log(matrix[y][x]);
                }
        } for (let i = 0; i < HeroCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if (matrix[y][x] == 0) {
                        matrix[y][x] = 4
                        console.log(matrix[y][x]);
                }
        }
        for (let i = 0; i < GrassGeneratorCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if (matrix[y][x] == 0) {
                        matrix[y][x] = 5
                        console.log(matrix[y][x]);
                }
        }
        return matrix;
}

let matrix = matrixGenerator(20, 30, 1, 1, 12,1);
let side = 30;

//
let grassArray = [];
let grassEaterArr = [];
let predatorArr = [];
let heroArr =[];
let grassGeneratorArr=[];

function setup() {
        frameRate(5);

        createCanvas(matrix[0].length * side, matrix.length * side);
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        }
                        //GrassEate
                        else if (matrix[y][x] == 2) {
                                let gre = new GrassEater(x, y)
                                grassEaterArr.push(gre);
                        }

                        else if (matrix[y][x] == 3) {
                                let pred = new Predator(x, y)
                                predatorArr.push(pred);
                        }
                        else if (matrix[y][x] == 4) {
                                let hr = new Hero(x, y)
                                heroArr.push(hr);
                        }
                        else if (matrix[y][x] == 5) {
                                let gen = new GrassGenerator(x, y)
                                grassGeneratorArr.push(gen);
                        }
                }

        }

}

function draw() {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        var toBot = side - side * 0.2
                        textSize(toBot);
                        if (matrix[y][x] == 1) {
                                fill("green");
                                rect(x * side, y * side, side, side);
                                text('🌿', x * side, y * side + toBot);
                        } else if(matrix[y][x] == 2){
                                fill ("brown")
                                rect(x * side, y * side, side, side);
                                text('🐗', x * side, y * side + toBot);
                        }else if(matrix[y][x] == 3){
                                fill("yellow")
                                rect(x * side, y * side, side, side);
                                text('🦁', x * side, y * side + toBot);
                        }
                        else if(matrix[y][x] == 4){
                                fill("black")
                                rect(x * side, y * side, side, side);
                                text("🌚", x * side, y * side + toBot);
                        }
                        else if(matrix[y][x] == 5){
                                fill("white")
                                rect(x * side, y * side, side, side);
                                text('🌫', x * side, y * side + toBot);
                        }
                       

                        else {
                                fill("lightgreen")
                                rect(x * side, y * side, side, side)
                        }

                }
        }

        for (var i in grassArray) {
                grassArray[i].mul();
        }

        // grassEater
        for (let i in grassEaterArr) {
                grassEaterArr[i].eat()
        }

        for (let i in predatorArr) {
                predatorArr[i].eat()
        }
        for (let i in heroArr) {
                heroArr[i].eat()
        }

        for (let i in grassGeneratorArr) {
                grassGeneratorArr[i].move()
                grassGeneratorArr[i].mul()
        }


}

