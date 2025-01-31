const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let pacman = { x: 50, y: 50, size: 20, speed: 5 };
let goal = { x: 400, y: 400, size: 20 };

document.addEventListener("keydown", function(event) {
    if (event.key === "ArrowUp") pacman.y -= pacman.speed;
    if (event.key === "ArrowDown") pacman.y += pacman.speed;
    if (event.key === "ArrowLeft") pacman.x -= pacman.speed;
    if (event.key === "ArrowRight") pacman.x += pacman.speed;
});

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(pacman.x, pacman.y, pacman.size, 0.2 * Math.PI, 1.8 * Math.PI);
    ctx.lineTo(pacman.x, pacman.y);
    ctx.fill();
    
    ctx.fillStyle = "red";
    ctx.fillRect(goal.x, goal.y, goal.size, goal.size);

    if (Math.abs(pacman.x - goal.x) < 20 && Math.abs(pacman.y - goal.y) < 20) {
        window.location.href = "gallery.html";
    }

    requestAnimationFrame(updateGame);
}

updateGame();