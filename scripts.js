const dfsEl = document.getElementById("dfs");
const ifzEl = document.getElementById("ifz");
const dfzEl = document.getElementById("dfz");
const textarea = document.getElementById("textarea");
const clear = document.getElementById("clear");

textarea.value = localStorage.getItem("text");

textarea.addEventListener("input", () => {
  localStorage.setItem("text", textarea.value);
});
clear.addEventListener("click", function () {
  localStorage.clear();
  textarea.value = "";
});

ifzEl.addEventListener("click", () => {
  txt = textarea;
  style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  txt.style.fontSize = currentSize + 1 + "px";
});

dfzEl.addEventListener("click", () => {
  txt = textarea;
  style = window.getComputedStyle(txt, null).getPropertyValue("font-size");
  currentSize = parseFloat(style);
  txt.style.fontSize = currentSize - 1 + "px";
});

dfsEl.addEventListener("click", () => {
  textarea.style.fontSize = "20px";
});
