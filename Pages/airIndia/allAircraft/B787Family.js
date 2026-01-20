

const headers787 = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'F', 'C', 'W', 'Y','Total'];

const B787 = [
    {'sno': 1, 'Aircraft': "787-9" ,'Registeration': "VT-TSD", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 2, 'Aircraft': "787-9" ,'Registeration': "VT-TSE", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 3, 'Aircraft': "787-9" ,'Registeration': "VT-TSH", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 4, 'Aircraft': "787-9" ,'Registeration': "VT-TSN", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 5, 'Aircraft': "787-9" ,'Registeration': "VT-TSO", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 6, 'Aircraft': "787-9" ,'Registeration': "VT-TSP", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 7, 'Aircraft': "787-9" ,'Registeration': "VT-AWA", 'Status': "New" , 
    'F': 0, 'C': 30, 'W': 28, 'Y': 238, 'Total': 296},
];



const table787 = document.getElementById("B787Family");
const thead787 = document.createElement("thead");
const headerRow787 = document.createElement("tr");

headers787.forEach(header => {
    const th787 = document.createElement("th");
    th787.innerText = header;
    headerRow787.appendChild(th787);
})

thead787.appendChild(headerRow787);
table787.appendChild(thead787);

const tbody787 = document.createElement("tbody");

B787.forEach(element => {
    const row787 = document.createElement("tr");
    
    headers787.forEach(header787 => {
        const td787 = document.createElement("td");
        td787.innerText = element[header787] ?? "-";
        row787.appendChild(td787);
    })
    tbody787.appendChild(row787);
})
table787.appendChild(tbody787);
