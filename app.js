var user_point = 0
var comp_point = 0

var userpnt = document.getElementsByClassName('user_num')[0]
var comppnt = document.getElementsByClassName('comp_num')[0]
var msg = document.getElementsByClassName('msgtext')[0]

function game(number) {
    const randomNumber = Math.floor(Math.random() * 3);
    if (number === randomNumber) {
        msg.innerText = "It's Draw, try again!"
        msg.style.background = "green"
        console.log("Draw")
    } else if ((number === 0 && randomNumber === 2) || (number === 1 && randomNumber === 0) || (number === 2 && randomNumber === 2)) {
        user_point += 1
        userpnt.innerText = user_point
        msg.innerText = "User Won!"
        msg.style.background = "Yellow"
        console.log("User Won!")
    } else {
        comp_point += 1
        comppnt.innerText = comp_point
        msg.innerText = "Computer Won! Better luck next time."
        msg.style.background = "red"
        console.log("Computer Won!")
    }
}

let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')

img1.onclick = () => {
    console.log("Image 1 is clicked!")
    game(0)
}
img2.onclick = () => {
    console.log("Image 2 is clicked")
    game(1)
}

img3.onclick = () => {
    console.log("Image 3 is clicked")
    game(2)
}