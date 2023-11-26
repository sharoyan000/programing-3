var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("../client"));

app.get('/', function (req, res) {
        res.redirect('index.html');
});
server.listen(3000, () => {
        console.log('connected');
});

function matrixGenerator(matrixSize, grassCount, grassEaterCount, predatorCount, HeroCount, GrassGeneratorCount,LightningCount) {
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
                }
        } for (let i = 0; i < HeroCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if (matrix[y][x] == 0) {
                        matrix[y][x] = 4
                }
        }
        for (let i = 0; i < GrassGeneratorCount; i++) {
                let x = Math.floor(Math.random() * matrixSize);
                let y = Math.floor(Math.random() * matrixSize);
                if (matrix[y][x] == 0) {
                        matrix[y][x] = 5
                }
        }

   
        return matrix;
}

matrix = matrixGenerator(30, 20, 20,15,10, 12,)

io.sockets.emit('send matrix', matrix)


grassArray = [];
grassEaterArr = [];
predatorArr = [];
heroArr = [];
grassGeneratorArr = [];


Grass = require("./grass")
GrassEater = require("./grassEater")
Predator = require("./predator")
Hero = require("./hero")
GrassGenerator = require("./grassGenerator")


function createObject(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[0].length; x++) {
                        if (matrix[y][x] == 1) {
                                let gr = new Grass(x, y)
                                grassArray.push(gr);
                        }
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
        io.sockets.emit('send matrix', matrix)

}

function game() {

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

        io.sockets.emit("send matrix", matrix);
    }

    let id = setInterval(game, 1000)




    var statistics ={
        grass:0,
        predator:0,
        GrassEater:0,
        hero:0,
        GrassGenerator:0,


    }

    setInterval(function(){
            statistics.grass = grassArray.length
            statistics.GrassEater = grassEaterArr.length
            statistics.predator = predatorArr.length
            statistics.hero = heroArr.length
            statistics.GrassGenerator = grassGeneratorArr.length

            fs.writeFile("statistics.json",JSON.stringify(statistics),()=>{
     
            })
},1000)


  


function GameOver(){
        for (let i in grassEaterArr) {
                grassEaterArr[i].die()
        }

        for (let i in predatorArr) {
                predatorArr[i].die()
        }
        for (let i in heroArr) {
                heroArr[i].die()
        }

        for (let i in grassGeneratorArr) {
                grassGeneratorArr[i].die()
        }
        matrix = matrixGenerator(30, 20)
        io.sockets.emit("send matrix", matrix);
        clearInterval(id)
}
io.on('connection', function (socket) {
        createObject(matrix)
        socket.on("send gameover", GameOver)
    })

