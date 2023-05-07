let list = document.querySelector("#list")
let grid = document.querySelector("#grid")
let vkladki = document.querySelector("#vkladki")
function changeGrid() {
    list.classList.remove("btn-dark")
    list.classList.add("btn-light")
    vkladki.classList.remove("btn-dark")
    vkladki.classList.add("btn-light")
    grid.classList.add("btn-dark")
}
function changeList() {
    grid.classList.remove("btn-dark")
    list.classList.add("btn-dark")
    vkladki.classList.remove("btn-dark")
    vkladki.classList.add("btn-light")
    grid.classList.add("btn-light")
}
function changeVkladki() {
    list.classList.remove("btn-dark")
    list.classList.add("btn-light")
    vkladki.classList.add("btn-dark")
    grid.classList.add("btn-light")
    grid.classList.remove("btn-dark")
}
grid.addEventListener("click", changeGrid)
list.addEventListener("click", changeList)
vkladki.addEventListener("click", changeVkladki)