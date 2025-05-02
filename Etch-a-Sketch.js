const heading = document.querySelector(".heading")
heading.style.textAlign = "center"
const container = document.querySelector(".container")
container.style.display="flex"
container.style.flexWrap="wrap"


container.style.height = "90vh"
container.style.width = "100vw"
container.style.margin = "0";
container.style.padding = "0";
container.style.boxSizing="border-box"

console.log(visualViewport)

const boxSize=60;
const columns = Math.floor(window.innerWidth/boxSize)
console.log(columns)
const rows = Math.floor(window.innerHeight/boxSize)
console.log(rows)
const totalBoxes = (columns * rows)


for(i=0; i<totalBoxes; i++)
{
const div = document.createElement("div")
div.classList.add("divs")
div.style.margin="auto"
div.style.border="2px solid"
div.style.display="flex"
div.style.flexWrap="1"
div.style.boxSizing="border-box"
div.style.justifyContent="center"
div.style.alignItems="center"
div.style.backgroundColor="red"
div.style.width=`${boxSize}px`
div.style.height=`${boxSize}px`
div.style.backgrou
div.textContent="testing"
div.addEventListener("mouseover",()=> 
    {
        let color = "#"
        const letters = "0123456789ABCDEF"
        for(i=0;i<6;i++)
        {
            color += letters[Math.floor((Math.random()*16))]
        }
        console.log(color);
    return div.style.backgroundColor = color
    })
container.appendChild(div)
}
    