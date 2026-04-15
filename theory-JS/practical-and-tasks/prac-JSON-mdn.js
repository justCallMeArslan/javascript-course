const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL =
  "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
  .then((response) => response.text())
  .then((text) => displayCatInfo(text));

// Don't edit the code above here!

function displayCatInfo(catString) {
  let total = 0;
  let male = 0;

  const cats = JSON.parse(catString);

  console.log(cats);


  for (let i = 0; i < cats.length; i++) {
    for (const kitten of cats[i].kittens) {
      total++;
      if (kitten.gender === "m") {
        male++;
      }
    }
    if (i < cats.length - 1) {
      motherInfo += `${cats[i].name} `
    } else {
      motherInfo += `and ${cats[i].name}.`
    }
  }



  kittenInfo = `There are ${total} kittens in total, ${male} males and ${total - male} females.`


  // Don't edit the code below here!

  para1.textContent = motherInfo;
  para2.textContent = kittenInfo;
}



// i have a webpack as a currcullum part , but i decided to use vite instead as its 
// more popular and growing bundler, so now next lesson is about webpack on production mode,
//  can you go study mode and give me lesson on production on vite?