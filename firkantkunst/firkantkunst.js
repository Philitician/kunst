window.onload = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const numSquaresInput = document.getElementById("numSquares");
  const angleInput = document.getElementById("angle");
  const sizeReductionInput = document.getElementById("sizeReduction");
  const numSquaresValue = document.getElementById("numSquaresValue");
  const angleValue = document.getElementById("angleValue");
  const sizeReductionValue = document.getElementById("sizeReductionValue");

  function drawSquare(x, y, size, rotation) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.beginPath();
    ctx.rect(-size / 2, -size / 2, size, size);
    ctx.stroke();
    ctx.restore();
  }

  function drawNestedSquares(numSquares, angle, sizeReduction) {
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    let size = canvas.width * 0.8; // Initial size of the largest square
    let rotation = 0;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < numSquares; i++) {
      drawSquare(centerX, centerY, size, rotation);
      size *= sizeReduction;
      rotation += angle;
    }
  }

  function update() {
    const numSquares = parseInt(numSquaresInput.value, 10);
    const angle = parseFloat(angleInput.value);
    const sizeReduction = parseFloat(sizeReductionInput.value);
    numSquaresValue.textContent = numSquares;
    angleValue.textContent = angle;
    sizeReductionValue.textContent = sizeReduction;
    drawNestedSquares(numSquares, angle, sizeReduction);
  }

  numSquaresInput.addEventListener("input", update);
  angleInput.addEventListener("input", update);
  sizeReductionInput.addEventListener("input", update);

  // Initial draw
  update();
};
