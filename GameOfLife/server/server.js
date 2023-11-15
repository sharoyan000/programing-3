var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

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

io.sockets.emit('send matrix', matrix)


let grassArray = [];
let grassEaterArr = [];
let predatorArr = [];
let heroArr =[];
let grassGeneratorArr=[];

Grass = require("./Grass")
GrassEater = require("./GrassEater")
predatorArr=require("./predatorArr")
heroArr=require("./heroArr")
grassGeneratorArr=require("./grassGeneratorArr")

function createObject(matrix){
    
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

io.sockets.emit('send matrix', matrix)


