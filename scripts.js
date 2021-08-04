const dfsEl = document.getElementById("dfs");
const ifzEl = document.getElementById("ifz");
const dfzEl = document.getElementById("dfz");
const textarea = document.getElementById("textarea");
const clear = document.getElementById("clear");
const select = document.getElementById("select");

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

const changeFontFamilyOfSelect = () => {
  select.style.fontFamily = select.value;
};

const changeFontFamilyOfTxtArea = () => {
  console.log(select.value);
  textarea.style.fontFamily = `"${select.value}"`;
};

select.addEventListener("input", changeFontFamilyOfTxtArea);
