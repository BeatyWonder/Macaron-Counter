

const NewTest = document.getElementById("increment-btn")
NewTest.addEventListener("click", myFunction);

let newCount = document.getElementById("count-el")
let count = 0

function myFunction()
{
    count += 1
    newCount.textContent = count
}

let newSave = document.getElementById("save-btn")
newSave.addEventListener("click", saveFunction)

let saveText = document.getElementById("save-txt")

function saveFunction()
{
    let newSaveTest = newCount.textContent + " - "
    saveText.textContent += newSaveTest
    newCount.textContent = 0
    count = 0
    
}


