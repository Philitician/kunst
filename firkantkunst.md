#### Task 3a: Generate Nested Squares

Create a program that generates a pattern of nested squares, where each square is rotated slightly inside the previous one, forming a spiral-like effect. The goal is to reproduce the figure shown in the image, which is composed of squares that gradually rotate and shrink as they nest inside each other.

#### Implementation Requirements

1. **Canvas Drawing**:

   - Use a `<canvas>` element to draw the pattern of nested squares.

2. **JavaScript Logic**:

   - Use a loop to draw multiple squares inside each other.
   - Each square should be slightly smaller and rotated by a fixed angle relative to the previous one.

3. **Drawing the Pattern**:

   - Start by drawing the largest square centered on the canvas.
   - Calculate the coordinates for the next square by decreasing the size and rotating it around the center.
   - Continue drawing smaller and rotated squares until the desired pattern is achieved.

4. **Dynamic Controls (Optional Enhancements)**:
   - Allow the user to adjust parameters such as the number of squares, the rotation angle between each square, and the size reduction factor using input fields or sliders.
