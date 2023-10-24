let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0

function increment() {
count += 1
countEl.textContent = count
}

function save() {
   let prevcount = count + " - "
    saveEl.textContent += prevcount 
    count = 0
    countEl.textContent = count
} 

function reset() {
    count = 0
    countEl.textContent = count 
    let resetprev = "Saved Stitch Count: "
    saveEl.textContent = resetprev
}






