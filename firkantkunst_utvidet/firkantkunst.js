window.onload = function () {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const numSquaresInput = document.getElementById("numSquares");
  const angleInput = document.getElementById("angle");
  const sizeReductionInput = document.getElementById("sizeReduction");
  const numSquaresValue = document.getElementById("numSquaresValue");
  const angleValue = document.getElementById("angleValue");
  const sizeReductionValue = document.getElementById("sizeReductionValue");
  const colorInput = document.getElementById("color");
  const colorValue = document.getElementById("colorValue");

  function drawSquare(x, y, size, rotation, color) {
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((rotation * Math.PI) / 180);
    ctx.beginPath();
    ctx.rect(-size / 2, -size / 2, size, size);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.restore();
  }

  function drawNestedSquares(
    x,
    y,
    numSquares,
    angle,
    sizeReduction,
    color,
    mirror
  ) {
    let size = canvas.width / 4; // Adjust size based on grid
    let rotation = 0;

    for (let i = 0; i < numSquares; i++) {
      drawSquare(x, y, size, rotation, color);
      size *= sizeReduction;
      rotation += mirror ? -angle : angle;
    }
  }

  function drawGrid(numSquares, angle, sizeReduction, color) {
    const numRows = 4;
    const numCols = 4;
    const cellWidth = canvas.width / numCols;
    const cellHeight = canvas.height / numRows;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let row = 0; row < numRows; row++) {
      for (let col = 0; col < numCols; col++) {
        const centerX = col * cellWidth + cellWidth / 2;
        const centerY = row * cellHeight + cellHeight / 2;
        const mirror = (row + col) % 2 === 1; // Mirror every other square
        drawNestedSquares(
          centerX,
          centerY,
          numSquares,
          angle,
          sizeReduction,
          color,
          mirror
        );
      }
    }
  }

  function update() {
    const numSquares = parseInt(numSquaresInput.value, 10);
    const angle = parseFloat(angleInput.value);
    const sizeReduction = parseFloat(sizeReductionInput.value);
    const color = colorInput.value;
    numSquaresValue.textContent = numSquares;
    angleValue.textContent = angle;
    sizeReductionValue.textContent = sizeReduction;
    colorValue.textContent = color;
    drawGrid(numSquares, angle, sizeReduction, color);
  }

  numSquaresInput.addEventListener("input", update);
  angleInput.addEventListener("input", update);
  sizeReductionInput.addEventListener("input", update);
  colorInput.addEventListener("input", update);

  // Initial draw
  update();
};
