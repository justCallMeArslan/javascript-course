import './style.css'
import { setupCounter } from './components/counter.js'
import { helloVite } from './components/hello.js'
import { viteTemplate } from './components/app.js'
import viteLogo from './assets/vite.png'


const hello = document.getElementById('greetings');
hello.textContent = helloVite;

if (import.meta.hot) { // rule to create new model instead of re-rendering page, when updating hello.js
  import.meta.hot.accept('./components/hello.js', (newModule) => {
    document.getElementById('greetings').textContent = newModule.helloVite
  })
}
const vitePic = document.createElement('img');
vitePic.src = viteLogo;
document.querySelector('.hello').appendChild(vitePic);


const app = document.querySelector('#app');
app.innerHTML = viteTemplate;

setupCounter(document.querySelector('#counter'))
