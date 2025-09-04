import totalizador from "./Totalizador.js";

const items = document.querySelector("#cantidad-item");
const div = document.querySelector("#resultado-div");
const form = document.querySelector("#total-form");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + totalizador(items.value) + "</p>";
});