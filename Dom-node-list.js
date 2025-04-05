const paragraphContainer = document.getElementById("paragraphContainer");
const demo = document.getElementById("demo");
const highlightBtn = document.getElementById("highlightBtn");
const addParagraphBtn = document.getElementById("addParagraphBtn");

// Display the text content of the second paragraph
const initialParagraphs = paragraphContainer.querySelectorAll("p");
demo.textContent = `The text content of the second paragraph is: ${initialParagraphs[1].textContent}`;

// Function to highlight paragraphs
function highlightParagraphs() {
  const paragraphs = paragraphContainer.querySelectorAll("p");
  paragraphs.forEach(p => p.classList.toggle("highlight"));
}

// Function to add a new paragraph
function addParagraph() {
  const newP = document.createElement("p");
  const total = paragraphContainer.querySelectorAll("p").length + 1;
  newP.textContent = `Hello Paragraph ${total}!`;
  paragraphContainer.appendChild(newP);
  updateParagraphCount();
}

// Function to update paragraph count
function updateParagraphCount() {
  const count = paragraphContainer.querySelectorAll("p").length;
  demo.textContent += `\nTotal paragraphs: ${count}`;
}

// Event listeners
highlightBtn.addEventListener("click", highlightParagraphs);
addParagraphBtn.addEventListener("click", addParagraph);

// Initial count
updateParagraphCount();
