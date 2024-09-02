document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const pointsInput = document.getElementById("points");
  const scalingInput = document.getElementById("scaling");
  const pointsValue = document.getElementById("pointsValue");
  const scalingValue = document.getElementById("scalingValue");

  function drawShape(points, scaling) {
    const a = 100; // semi-major axis
    const b = 100; // semi-minor axis
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const step = (2 * Math.PI) / points;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();

    for (let i = 0; i <= points; i++) {
      const v = i * step;
      const x = centerX + a * Math.cos(v) * scaling;
      const y = centerY + b * Math.sin(v);
      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.closePath();
    ctx.stroke();
  }

  function update() {
    const points = parseInt(pointsInput.value, 10);
    const scaling = parseFloat(scalingInput.value);
    pointsValue.textContent = points;
    scalingValue.textContent = scaling;
    drawShape(points, scaling);
  }

  pointsInput.addEventListener("input", update);
  scalingInput.addEventListener("input", update);

  // Initial draw
  update();
});
