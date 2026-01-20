
const select = document.getElementById("aircraftOption2");
const b787Table = document.getElementById("B787Refresh");
const a320Table = document.getElementById("A320neoRefresh");
const a321Table = document.getElementById("A321neoRefresh");



select.addEventListener("change", function () {

    b787Table.style.display = "none";
    a320Table.style.display = "none";
    a321Table.style.display = "none";


    if (this.value === "A320neoRefresh") {
        a320Table.style.display = "table";
    }
    if (this.value === "A321neoRefresh") {
        a321Table.style.display = "table";
    }
    if (this.value === "B787Refresh") {
        b787Table.style.display = "table";
    }


});