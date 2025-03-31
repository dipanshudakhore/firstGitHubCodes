let food = document.querySelectorAll('.food-items');
let addbox = document.querySelector('.selected-item-box');
let foodItems = document.querySelector('.food-items');
food.forEach((f)=>{
    f.addEventListener("click",()=>{
        let addedfood = document.createElement("div");
        addedfood.className = 'added-food';
        addbox.appendChild(addedfood);
        addedfood.innerHTML = `${f.innerText} <i>🗑️</i>`;
        addedfood.querySelector('i').addEventListener("click",()=>{
            addedfood.remove();
            f.style.backgroundColor = "bisque";
        })
        f.style.backgroundColor = "orange";
    })
})