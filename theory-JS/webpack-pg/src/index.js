import "./styles.css";
import { greetings } from "./greetings.js";
import { logoBlack } from "./images.js";

const logo2 = document.createElement('img'); // DOM manipulation to handle images 
logo2.src = logoBlack;
document.body.appendChild(logo2);


console.log(greetings);
