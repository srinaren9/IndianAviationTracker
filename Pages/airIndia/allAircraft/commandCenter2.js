
const select = document.getElementById("aircraftOption2");
const b787Family = document.getElementById("A320Family");
const b777Family = document.getElementById("A350Family");
const a320Family = document.getElementById("B787Family");
const a350Family = document.getElementById("B777Family");




select.addEventListener("change", function () {

    b787Family.style.display = "none";
    b777Family.style.display = "none";
    a320Family.style.display = "none";
    a350Family.style.display = "none";


    if (this.value === "A320Family") {
        a320Family.style.display = "table";
    }
    if (this.value === "A350Family") {
        a350Family.style.display = "table";
    }
    if (this.value === "B787Family") {
        b787Family.style.display = "table";
    }
    if (this.value === "B777Family") {
        b777Family.style.display = "table";
    }


});