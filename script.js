const horse = document.getElementById("horse");
const obstacle = document.getElementById("obstacle");
const scoreText = document.getElementById("score");

let score = 0;
let gameOver = false;

document.addEventListener("keydown", function(event) {
  if (event.code === "Space") {
    jump();
  }
});

function jump() {
  if (!horse.classList.contains("jump")) {
    horse.classList.add("jump");

    setTimeout(() => {
      horse.classList.remove("jump");
    }, 600);
  }
}

let scoreInterval = setInterval(() => {
  if (!gameOver) {
    score++;
    scoreText.innerText = score;
  }
}, 200);

let checkCollision = setInterval(() => {
  let horseBottom =
    parseInt(window.getComputedStyle(horse).getPropertyValue("bottom"));

  let obstacleLeft =
    parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

  if (obstacleLeft < 170 && obstacleLeft > 80 && horseBottom < 50) {
    gameOver = true;
    alert("Game Over! Poeng: " + score);
    obstacle.style.animation = "none";
  }
}, 10);

function restartGame() {
  location.reload();
}
