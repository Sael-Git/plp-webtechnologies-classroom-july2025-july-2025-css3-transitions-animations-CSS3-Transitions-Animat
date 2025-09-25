/* === JavaScript Functions & Animation Logic === */

// Global variables (accessible everywhere)
const box = document.getElementById("animatedBox");
const btn = document.getElementById("animateBtn");
const resultText = document.getElementById("functionResult");

/**
 * Triggers a CSS animation by adding and removing a class.
 * @param {HTMLElement} element - The element to animate
 * @param {string} animationClass - The CSS class that contains the animation
 * @param {number} duration - How long to keep the class in ms
 * @returns {string} - Status message
 */
function triggerAnimation(element, animationClass, duration) {
  element.classList.add(animationClass);
  // Remove the class after the animation ends so it can be replayed
  setTimeout(() => element.classList.remove(animationClass), duration);
  return `Animation '${animationClass}' played for ${duration/1000} seconds.`;
}

/**
 * Adds two numbers and returns the result.
 * Demonstrates parameters and return values.
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function addNumbers(a, b) {
  return a + b;
}

/**
 * Combines the above functions to animate the box and
 * display a computed result.
 */
function handleButtonClick() {
  // Local variable only accessible inside this function
  const sum = addNumbers(7, 5);
  const message = triggerAnimation(box, "animate", 2000);
  resultText.textContent = `${message} | The sum of 7 and 5 is ${sum}.`;
}

// Attach event listener
btn.addEventListener("click", handleButtonClick);
