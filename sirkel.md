#### Task 1: Circle and Ellipse Drawing

Implement a program that draws circles or ellipses using the parametric equations:

- \(x = a \cdot \cos(v)\)
- \(y = b \cdot \sin(v)\)

where \(0 \leq v \leq 2\pi\).

The program should:

1. Calculate points along the circumference of a circle or an ellipse.
2. Connect these points with straight lines to approximate the shape.

The user should be able to adjust two parameters:

- **Number of Points**: Controls the number of calculated points along the circle or ellipse. More points will result in a smoother shape, while fewer points will result in a more polygonal appearance.
- **Scaling Factor (x to kx)**: Adjusts the scaling of the x-axis. A scaling factor of 1 will draw a normal circle (if \(a = b\)) or a standard ellipse (if \(a \neq b\)). A different scaling factor will stretch or compress the shape horizontally.

The user interface should provide input fields or sliders to update these two parameters dynamically, and the drawing should update in real-time as the parameters change.

#### Implementation Details

1. **HTML Structure**:

   - Use a `<canvas>` element for drawing the circle or ellipse.
   - Add two input elements:
     - A number input or range slider for **Number of Points**.
     - A number input or range slider for **Scaling Factor (x to kx)**.

2. **JavaScript Logic**:
   - Set up an event listener for each input element to detect changes.
   - On each input change, recalculate the points based on the new parameters and redraw the shape on the canvas.
3. **Drawing the Circle or Ellipse**:

   - Use the parametric equations to calculate \(x\) and \(y\) coordinates for a set of points around the circumference.
   - Use a loop to iterate through a range of \(v\) values from 0 to \(2\pi\) in increments determined by the **Number of Points**.
   - For each point, calculate its coordinates and draw a line to the next point.

4. **Dynamic Updates**:
   - Whenever the user adjusts the **Number of Points** or the **Scaling Factor (x to kx)**, the canvas should clear the previous shape and draw the new one with updated parameters.
