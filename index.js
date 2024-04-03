// Write your code here!
// Select the 'main' element with the id 'main'
const mainElement = document.querySelector('main#main');

// If the element exists, remove it from the DOM
if (mainElement) {
  mainElement.remove();
}

const newHeader = document.querySelector('h1');