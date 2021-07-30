let textarea = document.getElementById("textarea");
let getTextarea = localStorage.getItem("text");
textarea.value = getTextarea;

textarea.addEventListener("input", () => {
  localStorage.setItem("text", textarea.value);
});
