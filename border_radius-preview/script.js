console.log("script loaded")

const topleft = document.getElementById("top-left")
const topright = document.getElementById("top-right")
const bottomright = document.getElementById("bottom-right")
const bottomleft = document.getElementById("bottom-left")
const box = document.getElementById("preview-box")
const para = document.getElementById("css-output")
const copyBtn = document.getElementById("copy-btn")
function updateBox() {
    // read all four .value properties
    console.log(topleft.value)
    console.log(topright.value)
    console.log(bottomright.value)
    console.log(bottomleft.value)
    // build the CSS string with px units
    const radius = `${topleft.value}px ${topright.value}px ${bottomright.value}px ${bottomleft.value}px`
    // apply it to box.style.borderRadius
    box.style.borderRadius = radius
    para.textContent = `border-radius: ${radius};`

    someElement.style.display = "none"
}
topleft.addEventListener("input", updateBox)
topright.addEventListener("input", updateBox)
bottomright.addEventListener("input", updateBox)
bottomleft.addEventListener("input", updateBox)
copyBtn.addEventListener("click", function() {
    navigator.clipboard.writeText(para.textContent)
})

updateBox()