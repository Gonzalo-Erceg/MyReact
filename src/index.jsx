import MyReact from "./React/MyReact.js";
import App from "../src/App.jsx";
const aplication = new App();
MyReact.render(aplication.render(), document.querySelector("#root"));
