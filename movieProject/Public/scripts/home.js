const productContainers =[ ...document.getElementsByClassName("product-container")]
// const nxtBtn =[...document.getElementsByClassName("nxt-btn")]
// const preBtn =[...document.getElementsByClassName("pre-btn")]

const nxtBtn =document.getElementsByClassName("nxt-btn")
const preBtn =document.getElementsByClassName("pre-btn")

productContainers.map((item, i) => {
    let containerDimenstions =  item.getBoundingClientRect()
    let containerWidth = containerDimenstions.width;

    nxtBtn[i].addEventListener("click", () => {
        item.scrollLeft +=containerWidth
    })
    preBtn[i].addEventListener("click", () => {
        item.scrollLeft -=containerWidth
    })
})