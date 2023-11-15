var socket = io();

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

function nkarel() {
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

setInterval (
    function nkarel() {
    socket.on('send matrix', nkarel)
    },1000
)
 function play(){ for(var i in grassArray) {
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
 setInterval(game, 1000)

 io.on('connection', function () {
    createObject(matrix)
})