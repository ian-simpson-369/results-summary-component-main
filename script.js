import jsonData from './data.json' with { type: 'json' };

console.log(jsonData)

let attributes = document.querySelectorAll(".attribute")
let pictures = document.querySelectorAll(".bottom-image")
let scores = document.querySelectorAll(".txt-trait-score")

for(let i = 0; i < jsonData.length; i++){
    attributes[i].textContent = jsonData[i].category ?? "error"
    pictures[i].src = jsonData[i].icon ?? "assets/images/favicon-32x32.png"
    scores[i].textContent = jsonData[i].score ?? "error"
}