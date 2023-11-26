var socket = io();

let side = 30;

let grassColor = "green"

GameOverButton = document.getElementById("GameOver");
GameOverButton.addEventListener("click", handleGameOverClick)

function handleGameOverClick(){
        socket.emit("send gameover");

}

let springButton = document.getElementById("spring");
springButton.addEventListener("click", handleSpringClick)

function handleSpringClick() {
        grassColor = "green"

}


let summarButton = document.getElementById("summar");
summarButton.addEventListener("click", handleSummarClick)

function handleSummarClick() {
        grassColor = "red"

}


let autumnButton = document.getElementById("autumn");
autumnButton.addEventListener("click", handleAutumnClick)

function handleAutumnClick() {
        grassColor = "yellow"

}

let winterButton = document.getElementById("winter");
winterButton.addEventListener("click", handleWinterClick)

function handleWinterClick() {
        grassColor = "blue"

}


function setup() {
        frameRate(5);

        createCanvas(30 * side, 30 * side);


}

function nkarel(matrix) {
        for (let y = 0; y < matrix.length; y++) {
                for (let x = 0; x < matrix[y].length; x++) {
                        var toBot = side - side * 0.2
                        textSize(toBot);
                        if (matrix[y][x] == 1) {
                                if (grassColor == "green") {
                                        fill(grassColor);
                                        rect(x * side, y * side, side, side);
                                        text('🌿', x * side, y * side + toBot);
                                }
                                else if (grassColor == "red") {
                                        fill(grassColor);
                                        rect(x * side, y * side, side, side);
                                        text('🌺', x * side, y * side + toBot);
                                }
                                else if (grassColor == "yellow") {
                                        fill(grassColor);
                                        rect(x * side, y * side, side, side);
                                        text('🌼', x * side, y * side + toBot);
                                }
                                else if (grassColor == "blue") {
                                        fill(grassColor);
                                        rect(x * side, y * side, side, side);
                                        text('❄️', x * side, y * side + toBot);
                                }

                        }
                        else if (matrix[y][x] == 2) {
                                fill("brown")
                                rect(x * side, y * side, side, side);
                                text('🐗', x * side, y * side + toBot);
                        } else if (matrix[y][x] == 3) {
                                fill("yellow")
                                rect(x * side, y * side, side, side);
                                text('🦁', x * side, y * side + toBot);
                        }
                        else if (matrix[y][x] == 4) {
                                fill("black")
                                rect(x * side, y * side, side, side);
                                text("🌚", x * side, y * side + toBot);
                        }
                        else if (matrix[y][x] == 5) {
                                fill("white")
                                rect(x * side, y * side, side, side);
                                text('🌫', x * side, y * side + toBot);
                        }else{
                                fill("gray")
                                rect(x * side, y * side, side, side);
                                text('🌫', x * side, y * side + toBot);
                        }


                     

                }
        }



}

setInterval(
        function () {
                socket.on('send matrix', nkarel)
        }, 1000
)

