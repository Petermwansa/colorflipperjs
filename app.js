const colors = ["green", "blue", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () {

    const randomNumber = parseInt(getRandomNumber());
    console.log("#####");

    document.body.style.backgroundColor = colors[4];
    color.textContent = colors[4];

})


function getRandomNumber () {
    return Math.floor(Math.random() * colors.legnth) ;
}
