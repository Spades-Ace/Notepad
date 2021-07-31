const dfsEl = document.getElementById("dfs");
const ifzEl = document.getElementById("ifz");
const dfzEl = document.getElementById("dfz");
const textarea = document.getElementById("textarea");
const clear = document.getElementById("clear");
const select = document.getElementById("select");

const one = document.getElementById("o1");
const two = document.getElementById("t2");
const three = document.getElementById("t3");
const four = document.getElementById("f4");
const five = document.getElementById("f5");
const six = document.getElementById("s6");
const seven = document.getElementById("s7");
const eight = document.getElementById("e8");
const nine = document.getElementById("n9");
const ten = document.getElementById("t10");
const eleven = document.getElementById("e11");
const twelve = document.getElementById("t12");
const thirteen = document.getElementById("t13");

textarea.value = localStorage.getItem("text");

textarea.addEventListener("input", () => {
  localStorage.setItem("text", textarea.value);
});
clear.addEventListener("click", function () {
  localStorage.clear();
  textarea.value = "";
});

const updateFontSize = (el, increment) => {
  const currentFontSize = parseFloat(
    window.getComputedStyle(el, null).getPropertyValue("font-size")
  );
  const newFontSize = currentFontSize + increment;
  if (newFontSize <= 10) {
    newFontSize = 10;
  }
  el.style.fontSize = newFontSize + "px";
};

ifzEl.addEventListener("click", () => {
  updateFontSize(textarea, 1);
});

dfzEl.addEventListener("click", () => {
  updateFontSize(textarea, -1);
});

dfsEl.addEventListener("click", () => {
  textarea.style.fontSize = "20px";
});


