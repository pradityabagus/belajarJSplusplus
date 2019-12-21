/*
 * File: BlueRectangle.js
 * ----------------------
 * This program uses the object-oriented graphics model to draw a
 * blue rectangle on the screen.
 */

function BlueRectangle() {
   let gw = GWindow(500, 200);
   let rect = GRect(150, 50, 200, 100);
   rect.setColor("Red");
   rect.setFilled(true);
   gw.add(rect);
}