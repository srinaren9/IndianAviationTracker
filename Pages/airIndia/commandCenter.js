

const select = document.getElementById("aircraftOption");

const b787Table = document.getElementById("B787Refurbishment");
const b777Table = document.getElementById("B777Refurbishment");
const a320Table = document.getElementById("a320neoRefurbishment");


select.addEventListener("change", function () {

   
    b787Table.style.display = "none";
    b777Table.style.display = "none";
    a320Table.style.display = "none";


    if (this.value === "B787Refurbishment") {
        b787Table.style.display = "table";
    }

    if (this.value === "B777Refurbishment") {
        b777Table.style.display = "table";
    }

    if (this.value === "a320neoRefurbishment") {
        a320Table.style.display = "table";
    }
});