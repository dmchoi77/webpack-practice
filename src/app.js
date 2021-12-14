import { sum } from "./math";
import "./app.css";
import image from "./app.png";

window.addEventListener("DOMContentLoaded", () => {
  const el = document.querySelector("#app");
  el.innerHTML = `
        <h1>1 + 2 = ${sum(1, 2)}</h1>
        <image src="${image}" alt = "JS"/>
    `;
});
