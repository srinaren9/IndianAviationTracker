

const headers350 = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'F', 'C', 'W', 'Y','Total'];

const A350 = [
    {'sno': 1, 'Aircraft': "A350-900" ,'Registeration': "VT-JRA", 'Status': "New" , 
    'F': 0, 'C': 28, 'W': 24, 'Y': 268, 'Total': 316},
    {'sno': 2, 'Aircraft': "A350-900" ,'Registeration': "VT-JRB", 'Status': "New" , 
    'F': 0, 'C': 28, 'W': 24, 'Y': 268, 'Total': 316},
    {'sno': 3, 'Aircraft': "A350-900" ,'Registeration': "VT-JRH", 'Status': "New" , 
    'F': 0, 'C': 28, 'W': 24, 'Y': 268, 'Total': 316},
    {'sno': 4, 'Aircraft': "A350-900" ,'Registeration': "VT-JRE", 'Status': "New" , 
    'F': 0, 'C': 28, 'W': 24, 'Y': 268, 'Total': 316},
    {'sno': 5, 'Aircraft': "A350-900" ,'Registeration': "VT-JRF", 'Status': "New" , 
    'F': 0, 'C': 28, 'W': 24, 'Y': 268, 'Total': 316},
    {'sno': 6, 'Aircraft': "A350-900" ,'Registeration': "VT-JRI", 'Status': "New" , 
    'F': 0, 'C': 28, 'W': 24, 'Y': 268, 'Total': 316},
    {'sno': 7, 'Aircraft': "A350-1000" ,'Registeration': "VT-JRO", 'Status': "New" , 
    'F': "TBD", 'C': "TBD", 'W': "TBD", 'Y': "TBD", 'Total': "TBD"},
];



const table350 = document.getElementById("A350Family");
const thead350 = document.createElement("thead");
const headerRow350 = document.createElement("tr");

headers350.forEach(header => {
    const th350 = document.createElement("th");
    th350.innerText = header;
    headerRow350.appendChild(th350);
})

thead350.appendChild(headerRow350);
table350.appendChild(thead350);

const tbody350 = document.createElement("tbody");

A350.forEach(element => {
    const row350 = document.createElement("tr");
    
    headers350.forEach(header350 => {
        const td350 = document.createElement("td");
        td350.innerText = element[header350] ?? "-";
        row350.appendChild(td350);
    })
    tbody350.appendChild(row350);
})
table350.appendChild(tbody350);
