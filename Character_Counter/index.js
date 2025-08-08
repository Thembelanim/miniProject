const inputTextEl = document.getElementById("inputText")
const totalCounterEl = document.getElementById("total-counter")
const remainigCounterEl = document.getElementById("remainig-counter")


inputTextEl.addEventListener("keyup", () => updateCounter())


function updateCounter(){
    totalCounterEl.innerText = inputTextEl.value.length
    remainigCounterEl.innerText = 
    inputTextEl.getAttribute("maxlength") - inputTextEl.value.length  
}
