// ui

// const counter = document.getElementsByTagName("h1")[0]
let count = 0

const counter = document.getElementById("counter")
console.log(counter)

const decrement= document.getElementById("dect")
console.log(decrement)

const reset = document.getElementById("rt")
console.log(reset)

const increment = document.getElementById("int")
console.log(increment)

// Function
function changeColour(){
    if(count > 0 ){
        counter.style.color = 'green'
        counter.style.textShadow = "1px 1px 2px black,0 0 1em green,0 0 0.2em green"
    }
    else if(count < 0){
        counter.style.color = 'red'
        counter.style.textShadow = "1px 1px 2px black,0 0 1em red,0 0 0.2em red"
    }else if(count === 0){
        counter.style.color = 'black'
        counter.style.textShadow = "1px 1px 2px black,0 0 1em black,0 0 0.2em black"
    }else{
        alert("error")
    }
}


// addEventListner

increment.addEventListener("click", function(){
    count++
    counter.innerHTML = count
    changeColour()
})

decrement.addEventListener('click',function(){
    count--
    counter.innerHTML = count
    changeColour()
})

reset.addEventListener('click' , function(){
    count = 0
    counter.innerHTML = 0
    changeColour()
})


