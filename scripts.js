// Existing variable declarations
const dfsEl = document.getElementById("dfs");
const ifzEl = document.getElementById("ifz");
const dfzEl = document.getElementById("dfz");
const textarea = document.getElementById("textarea");
const clear = document.getElementById("clear");
const select = document.getElementById("select");
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Load saved text and dark mode preference
textarea.value = localStorage.getItem("text") || "";

// Function to apply dark mode classes
function applyDarkModeClasses(isEnabled) {
  const method = isEnabled ? 'add' : 'remove';

  document.body.classList[method]("dark-mode");
  textarea.classList[method]("dark-mode");
  const heading = document.getElementById("heading");
  heading.classList[method]("dark-mode");

  const buttons = document.querySelectorAll("button");
  const selects = document.querySelectorAll("select");

  buttons.forEach((button) => {
    button.classList[method]("dark-mode");
  });

  selects.forEach((select) => {
    select.classList[method]("dark-mode");
  });
}

// Check for saved dark mode preference and apply it
if (localStorage.getItem("darkMode") === "enabled") {
  applyDarkModeClasses(true);
}

// Event listener for dark mode toggle button
darkModeToggle.addEventListener("click", () => {
  const darkModeEnabled = localStorage.getItem("darkMode") === "enabled";
  
  if (!darkModeEnabled) {
    applyDarkModeClasses(true);
    localStorage.setItem("darkMode", "enabled");
  } else {
    applyDarkModeClasses(false);
    localStorage.setItem("darkMode", "disabled");
  }
});

// Save textarea content to localStorage on input
textarea.addEventListener("input", () => {
  localStorage.setItem("text", textarea.value);
});

// Clear textarea and localStorage
clear.addEventListener("click", function () {
  localStorage.removeItem("text");
  textarea.value = "";
});

// Update font size function (fixed variable scope issue)
const updateFontSize = (el, increment) => {
  let currentFontSize = parseFloat(
    window.getComputedStyle(el, null).getPropertyValue("font-size")
  );
  let newFontSize = currentFontSize + increment;
  if (newFontSize <= 10) {
    newFontSize = 10;
  }
  el.style.fontSize = newFontSize + "px";
};

// Font size adjustment event listeners
ifzEl.addEventListener("click", () => {
  updateFontSize(textarea, 1);
});

dfzEl.addEventListener("click", () => {
  updateFontSize(textarea, -1);
});

dfsEl.addEventListener("click", () => {
  textarea.style.fontSize = "20px";
});

// Change font family of textarea based on selection
const changeFontFamilyOfTxtArea = () => {
  textarea.style.fontFamily = `"${select.value}"`;
};

// Event listener for font selection
select.addEventListener("input", changeFontFamilyOfTxtArea);
