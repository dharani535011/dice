const root=document.getElementById("magic")
const button1=document.getElementById("button1")
const button2=document.getElementById("button2")
const mark1=document.getElementById("mark1")
const mark2=document.getElementById("mark2")
const cancell=document.getElementById("cancel")
const popupp=document.querySelector(".popup")
const win=document.querySelector("#price")
let total=0
let totall=0
button1.addEventListener("click",()=>{
    root.innerHTML=""
    let random=Math.floor(Math.random()*6+1)
    console.log(random)
    
    total = Number(random)+Number(total)
    console.log(total)
    mark1.innerText=total
    if(total>=30){
        const price=document.querySelector(".popup")
               price.style.display="block"
               win.innerText="Player 1 Won"
        }
for(let i=1;i<=random;i++){
const box=document.createElement("div")
box.className="div"
root.appendChild(box)}})
button2.addEventListener("click",()=>{
    root.innerHTML=""
    let random=Math.floor(Math.random()*6+1)
    console.log(random)
    
    totall = Number(random)+Number(totall)
    mark2.innerText=totall
    if(totall>=30){
        const price=document.querySelector(".popup")
               price.style.display="block"
               win.innerText="Player 2 Won"
        }
for(let i=1;i<=random;i++){
const box=document.createElement("div")
box.className="div"
root.appendChild(box)}
})

function block(){
    document.querySelector(".popup").style.display="none"
    window.location.reload()
}
function refersh(){
    window.location.reload()
}