document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");
  const pointsInput = document.getElementById("points");
  const multiplierInput = document.getElementById("multiplier");
  const pointsValue = document.getElementById("pointsValue");
  const multiplierValue = document.getElementById("multiplierValue");

  function drawPattern(points, multiplier) {
    const radius = canvas.width / 2 - 10;
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const step = (2 * Math.PI) / points;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const coordinates = [];
    for (let i = 0; i < points; i++) {
      const angle = i * step;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      coordinates.push({ x, y });
    }

    for (let i = 0; i < points; i++) {
      const start = coordinates[i];
      const end = coordinates[(i * multiplier) % points];
      const gradient = ctx.createLinearGradient(start.x, start.y, end.x, end.y);
      gradient.addColorStop(0, `hsl(${(i / points) * 360}, 100%, 50%)`);
      gradient.addColorStop(
        1,
        `hsl(${((i * multiplier) / points) * 360}, 100%, 50%)`
      );
      ctx.strokeStyle = gradient;
      ctx.lineWidth = (i % 5) + 1;
      ctx.beginPath();
      ctx.moveTo(start.x, start.y);
      ctx.lineTo(end.x, end.y);
      ctx.stroke();
    }
  }

  function update() {
    const points = parseInt(pointsInput.value, 10);
    const multiplier = parseInt(multiplierInput.value, 10);
    pointsValue.textContent = points;
    multiplierValue.textContent = multiplier;
    drawPattern(points, multiplier);
  }

  pointsInput.addEventListener("input", update);
  multiplierInput.addEventListener("input", update);

  // Initial draw
  update();
});
