#### Task 2: Circle Art

Create a program that draws artistic patterns based on points equally distributed around a circle using the following steps:

1. **Connect Points Sequentially:**

   - Distribute \(k\) points evenly around a circle (e.g., \(k = 72\)).
   - Connect each point to the next by drawing a line from point 1 to point 2, point 2 to point 4, point 3 to point 6, point 4 to point 8, and so on.
   - Continue this pattern around the circle (if the number exceeds \(k\), wrap around to the beginning, so point \(k+1\) connects back to point 1).

2. **Connect Points by Multiples:**
   - Connect each point to its multiple. For example, draw a line from point 1 to point 3, point 2 to point 6, point 3 to point 9, etc.
3. **General Multiplication Pattern:**
   - Create a more generalized connection pattern by connecting each point \(x\) to \(kx\) for a given multiplier \(k\).

The user should be able to adjust two parameters:

- **Number of Points (k):** Defines the number of points distributed around the circle. More points will create more complex and dense patterns.
- **Multiplication Factor (kx):** Defines how points are connected (i.e., which point is connected to which multiple of itself).

The program should provide input fields or sliders to dynamically adjust these two parameters, and the drawing should update in real-time based on these changes.

#### Implementation Details

1. **HTML Structure**:

   - Use a `<canvas>` element for drawing the circle and its patterns.
   - Add two input elements:
     - A number input or range slider for **Number of Points (k)**.
     - A number input or range slider for **Multiplication Factor (kx)**.

2. **JavaScript Logic**:

   - Set up event listeners for each input element to detect changes.
   - On each input change, recalculate the connections between points and redraw the pattern on the canvas.

3. **Drawing the Pattern**:

   - Calculate the \(x, y\) coordinates of each point around the circle using the formula:
     - \(x = centerX + radius \cdot \cos(2\pi \cdot i/k)\)
     - \(y = centerY + radius \cdot \sin(2\pi \cdot i/k)\)
   - Use a loop to iterate through each point and draw lines according to the specified connection rules.

4. **Dynamic Updates**:
   - Whenever the user adjusts the **Number of Points (k)** or the **Multiplication Factor (kx)**, the canvas should clear the previous drawing and update with the new pattern.
