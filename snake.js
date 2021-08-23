class snake {
    constructor(game, food) {
        this.game = game;
        this.food = food;
        this.mark = [[2, 0], [1, 0], [0, 0]];
    }
    draw() {
        this.game.ctx.fillStyle = "green";
        for (let i = 1; i < this.mark.length; i++) {
            this.game.ctx.fillRect(this.mark[i][0] * sizeDot + 1, this.mark[i][1] * sizeDot + 1, sizeDot - 2, sizeDot - 2);
        }
        this.game.ctx.fillStyle = "yellow";
        this.game.ctx.fillRect(this.mark[0][0] * sizeDot + 1, this.mark[0][1] * sizeDot + 1, sizeDot - 2, sizeDot - 2);
    }
    update() {
        this.mark.unshift([this.mark[0][0] + dx, this.mark[0][1] + dy]);
        this.mark.pop();
        if (this.mark[0][0] >= g_width / sizeDot) {
            this.mark[0][0] = 0;
        } else if (this.mark[0][0] < 0) {
            this.mark[0][0] = g_width / sizeDot - 1;
        } else if (this.mark[0][1] >= g_height / sizeDot - 1) {
            this.mark[0][1] = 0;
        } else if (this.mark[0][1] < 0) {
            this.mark[0][1] = g_height / sizeDot - 1;
        }
    }
    keydown() {
        window.addEventListener("keydown", (event) => {
            if (event.code === "ArrowLeft" && dx === 0) {
                dx = -1; dy = 0;
            } else if (event.code === "ArrowRight" && dx === 0) {
                dx = 1; dy = 0;
            } else if (event.code === "ArrowUp" && dy === 0) {
                dy = -1; dx = 0;
            } else if (event.code === "ArrowDown" && dy === 0) {
                dy = 1; dx = 0;
            }
        });
    }
    eat() {
        if (this.mark[0][0] === this.food.foodX && this.mark[0][1] === this.food.foodY) {
            this.mark.push(this.mark[this.mark.length - 1]);
            var updateFood = () => {
                this.food.update();
                let mark = 0;
                for (let i = 0; i < this.mark.length; i++) {
                    if (this.mark[0][0] === this.food.foodX && this.mark[0][1] === this.food.foodY) {
                        mark = 1;
                        break;
                    }
                }
                if (mark === 1) updateFood();
                else return;
            }
            updateFood();
        }
    }
    die() {
        for (let i = 1; i < this.mark.length; i++) {
            if (this.mark[0][0] === this.mark[i][0] && this.mark[0][1] === this.mark[i][1]) {
                runGame = false;
                gameOver.style.opacity = 1;
                restart.style.display = "block";
                return;
            }
        }
    }
}