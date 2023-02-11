let images = ["acer.jpg", "apple.jpg", "asus.jpg", "msi.jpg"]
let index = 0

document.getElementById("slider").src = images[index]

const next = () => {
    index++
    if (index == images.length) {
        index = 0
    }
    document.getElementById("slider").src = images[index]
}



document.getElementById("slider").src = images[index]

const previous = () => {
    index--
    if (index < 0) {
        index = images.length - 1
    }
    document.getElementById("slider").src = images[index]
}



const menu = document.querySelector("#menu-btn")
const drop = document.querySelector("#dropdown")

menu.addEventListener("on", () => {
    drop.classList.toggle("active")
    menu.classList.toggle("active")
})