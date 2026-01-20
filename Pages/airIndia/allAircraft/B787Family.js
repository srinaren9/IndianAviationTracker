

const headers787 = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'F', 'C', 'W', 'Y','Total'];

const B787 = [
    {'sno': 1, 'Aircraft': "787-8" ,'Registeration': "VT-ANA", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 2, 'Aircraft': "787-8" ,'Registeration': "VT-ANC", 'Status': "Old" , 
   'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 3, 'Aircraft': "787-8" ,'Registeration': "VT-AND", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 4, 'Aircraft': "787-8" ,'Registeration': "VT-ANE", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 5, 'Aircraft': "787-8" ,'Registeration': "VT-ANG", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 6, 'Aircraft': "787-8" ,'Registeration': "VT-ANH", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 7, 'Aircraft': "787-8" ,'Registeration': "VT-ANI", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 8, 'Aircraft': "787-8" ,'Registeration': "VT-ANJ", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 9, 'Aircraft': "787-8" ,'Registeration': "VT-ANK", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 10, 'Aircraft': "787-8" ,'Registeration': "VT-ANL", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 11, 'Aircraft': "787-8" ,'Registeration': "VT-ANM", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 12, 'Aircraft': "787-8" ,'Registeration': "VT-ANN", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 13, 'Aircraft': "787-8" ,'Registeration': "VT-ANO", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 14, 'Aircraft': "787-8" ,'Registeration': "VT-ANP", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 15, 'Aircraft': "787-8" ,'Registeration': "VT-ANQ", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 16, 'Aircraft': "787-8" ,'Registeration': "VT-ANR", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 17, 'Aircraft': "787-8" ,'Registeration': "VT-ANS", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 18, 'Aircraft': "787-8" ,'Registeration': "VT-ANT", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 19, 'Aircraft': "787-8" ,'Registeration': "VT-ANU", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 20, 'Aircraft': "787-8" ,'Registeration': "VT-ANV", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 21, 'Aircraft': "787-8" ,'Registeration': "VT-ANW", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 22, 'Aircraft': "787-8" ,'Registeration': "VT-ANX", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 23, 'Aircraft': "787-8" ,'Registeration': "VT-ANY", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 24, 'Aircraft': "787-8" ,'Registeration': "VT-ANZ", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 25, 'Aircraft': "787-8" ,'Registeration': "VT-NAA", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 26, 'Aircraft': "787-8" ,'Registeration': "VT-NAC", 'Status': "Old" , 
    'F': 0, 'C': 18, 'W': 0, 'Y': 238, 'Total': 256},
    {'sno': 27, 'Aircraft': "787-9" ,'Registeration': "VT-TSD", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 28, 'Aircraft': "787-9" ,'Registeration': "VT-TSE", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 28, 'Aircraft': "787-9" ,'Registeration': "VT-TSH", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 30, 'Aircraft': "787-9" ,'Registeration': "VT-TSN", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 31, 'Aircraft': "787-9" ,'Registeration': "VT-TSO", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 32, 'Aircraft': "787-9" ,'Registeration': "VT-TSP", 'Status': "NewV" , 
    'F': 0, 'C': 30, 'W': 21, 'Y': 248, 'Total': 299},
    {'sno': 33, 'Aircraft': "787-9" ,'Registeration': "VT-AWA", 'Status': "New" , 
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
