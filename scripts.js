let clear = document.getElementById("clear");

const textarea = document.getElementById("textarea");
textarea.value = localStorage.getItem("text");

textarea.addEventListener("input", () => {
  localStorage.setItem("text", textarea.value);
});
clear.addEventListener("click", function () {
  localStorage.clear();
  textarea.value = "";
});
