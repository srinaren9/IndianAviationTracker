
const select = document.getElementById("aircraftOption1");
const b777Table = document.getElementById("B777Refresh");


select.addEventListener("change", function () {

    b777Table.style.display = "none";


    if (this.value === "B777Refresh") {
        b777Table.style.display = "table";
    }

});