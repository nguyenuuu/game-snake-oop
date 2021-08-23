class game {
    constructor() {
        this.init();
        this.chooseLevel();
        this.loop();
        this.restart();
    }
    chooseLevel() {
        easy.addEventListener("click", () => {
            speed = 150;
            runGame = true;
            level.style.display = "none";
            this.loop();
        });
        medium.addEventListener("click", () => {
            speed = 100;
            runGame = true;
            level.style.display = "none";
            this.loop();
        });
        hard.addEventListener("click", () => {
            speed = 50;
            runGame = true;
            level.style.display = "none";
            this.loop();
        });
    }
    init() {
        // setting canvas
        this.canvas = document.createElement("canvas");
        this.ctx = this.canvas.getContext("2d");
        this.canvas.width = g_width;
        this.canvas.height = g_height;
        document.body.appendChild(this.canvas);
        // add food and snake
        this.food = new food(this);
        this.snake = new snake(this, this.food);
    }
    loop() {
        this.update();
        this.draw();
        if (!runGame) return;
        setTimeout(() => this.loop(), speed);
    }
    update() {
        // move
        this.snake.update();
        this.snake.keydown();
        // eat
        this.snake.eat();
        // die
        this.snake.die();
    }
    draw() {
        // draw background
        this.ctx.clearRect(0, 0, g_width, g_height);
        this.ctx.fillStyle = "black";
        this.ctx.fillRect(0, 0, g_width, g_height);
        // draw snake and food
        this.food.draw();
        this.snake.draw();
        // score
        score.textContent = `Score: ${this.snake.mark.length - 3}`;
    }
    restart() {
        restart.addEventListener("click", () => {
            runGame = true;
            gameOver.style.opacity = 0;
            restart.style.display = "none";
            this.snake.mark = [[2, 0], [1, 0], [0, 0]];
            this.food.foodX = Math.floor(g_width / sizeDot / 2);
            this.food.foodY = Math.floor(g_height / sizeDot / 2);
            dx = 1;
            dy = 0;
            this.loop();
        })
    }
}

var g = new game();