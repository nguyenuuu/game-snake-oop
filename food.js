class food {
    constructor(game) {
        this.game = game;
        this.foodX = Math.floor(g_width / sizeDot / 2);
        this.foodY = Math.floor(g_height / sizeDot / 2);
    }
    draw() {
        this.game.ctx.fillStyle = "red";
        this.game.ctx.fillRect(this.foodX * sizeDot + 1, this.foodY * sizeDot + 1, sizeDot - 2, sizeDot - 2);
    }
    update() {
        let tgX = Math.floor(Math.random() * (g_width / sizeDot - 1));
        let tgY = Math.floor(Math.random() * (g_height / sizeDot - 1));
        this.foodX = tgX;
        this.foodY = tgY;
    }
}