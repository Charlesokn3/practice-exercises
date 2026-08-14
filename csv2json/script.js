const jsonInput = document.getElementById("jsonInput")
const csvOutput = document.getElementById("csvOutput")
const warning = document.getElementById("warning")
const clearBtn = document.getElementById("clearBtn")
const convertBtn = document.getElementById("convertBtn")

clearBtn.addEventListener("click", () => {
    jsonInput.value = "";
    csvOutput.value = "";
})

convertBtn.addEventListener("click", () => {
    try {
        const data = JSON.parse(jsonInput.value);
        const records = Array.isArray(data) ? data : [data];
        const header = Object.keys(records[0]).join(",");
        const rows = records.map(row => Object.values(row).join(","));
        csvOutput.value = header + "\n" + rows.join("\n");
        warning.textContent = "";
    } catch (error) {
        warning.textContent = "Invalid JSON";
    }
})