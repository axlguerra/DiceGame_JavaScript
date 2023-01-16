console.log("hello")

let randomNumber1 =  Math.random()
let randomNumber2 = Math.random()

randomNumber1 = Math.floor(randomNumber1*6+1)
randomNumber2 = Math.floor(randomNumber2*6+1)
console.log(randomNumber1)
// document.querySelector(".img1").src=`images/dice${randomNumber1}.png`
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`)
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`)


let title = document.querySelector(".title")

if(randomNumber1>randomNumber2){
    console.log("PLayer one wins")
    title.innerHTML="Player 1 WINS!"

}else if (randomNumber1<randomNumber2){
    console.log("player 2 woims")
    title.innerHTML="Player 2 WINS!"
}else{
    console.log("Draw")
    title.innerHTML="Its a Draw!"
}