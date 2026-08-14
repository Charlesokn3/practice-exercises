console.log("script loaded")
// horizontal controls
const topleft = document.getElementById("top-left")
const topright = document.getElementById("top-right")
const bottomright = document.getElementById("bottom-right")
const bottomleft = document.getElementById("bottom-left")
// vertical controls
const topleft_V = document.getElementById("top-left-v")
const topright_V = document.getElementById("top-right-v")
const bottomright_V = document.getElementById("bottom-right-v")
const bottomleft_V = document.getElementById("bottom-left-v")

const box = document.getElementById("preview-box")
const para = document.getElementById("css-output")
const copyBtn = document.getElementById("copy-btn")
const advancedToggle = document.getElementById("advanced-toggle")
const advancedControls = document.getElementById("advanced-controls")

function updateBox() {
    // read all four h.value properties
    console.log(topleft.value)
    console.log(topright.value)
    console.log(bottomright.value)
    console.log(bottomleft.value)
    // read all four V.value properties
    console.log(topleft_V.value)
    console.log(topright_V.value)
    console.log(bottomright_V.value)
    console.log(bottomleft_V.value)
    // build the CSS string with px units
    let radius
    if (advancedToggle.checked) {
        radius = `${topleft.value}px ${topright.value}px ${bottomright.value}px ${bottomleft.value}px / ${topleft_V.value}px ${topright_V.value}px ${bottomright_V.value}px ${bottomleft_V.value}px`
    } else {
        radius = `${topleft.value}px ${topright.value}px ${bottomright.value}px ${bottomleft.value}px`
    }
    // apply it to box.style.borderRadius
    box.style.borderRadius = radius
    para.textContent = `border-radius: ${radius};`

}

topleft.addEventListener("input", updateBox)
topright.addEventListener("input", updateBox)
bottomright.addEventListener("input", updateBox)
bottomleft.addEventListener("input", updateBox)

topleft_V.addEventListener("input", updateBox)
topright_V.addEventListener("input", updateBox)
bottomright_V.addEventListener("input", updateBox)
bottomleft_V.addEventListener("input", updateBox)

copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(para.textContent)
})
advancedToggle.addEventListener("change", function () {
    if (advancedToggle.checked) {
        advancedControls.style.display = "block"
    } else {
        advancedControls.style.display = "none"
    }
})

updateBox()