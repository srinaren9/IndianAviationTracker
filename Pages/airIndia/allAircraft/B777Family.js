

const headers777 = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'F', 'C', 'W', 'Y','Total'];

const B777 = [
    {'sno': 1, 'Aircraft': "787-8" ,'Registeration': "VT-ALJ", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 2, 'Aircraft': "787-8" ,'Registeration': "VT-ALK", 'Status': "Old" , 
   'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 3, 'Aircraft': "787-8" ,'Registeration': "VT-ALL", 'Status': "Old" , 
    'F': "TBD", 'C': "TBD", 'W': "TBD", 'Y': "TBD", 'Total': "TBD"},
    {'sno': 4, 'Aircraft': "787-8" ,'Registeration': "VT-ALM", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 5, 'Aircraft': "787-8" ,'Registeration': "VT-ALN", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 6, 'Aircraft': "787-8" ,'Registeration': "VT-ALO", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 7, 'Aircraft': "787-8" ,'Registeration': "VT-ALP", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 8, 'Aircraft': "787-8" ,'Registeration': "VT-ANQ", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 9, 'Aircraft': "787-8" ,'Registeration': "VT-ANR", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 10, 'Aircraft': "787-8" ,'Registeration': "VT-ANS", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 11, 'Aircraft': "787-8" ,'Registeration': "VT-ANT", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 12, 'Aircraft': "787-8" ,'Registeration': "VT-ANI", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 13, 'Aircraft': "787-8" ,'Registeration': "VT-ANX", 'Status': "Old" , 
    'F': 4, 'C': 35, 'W': 0, 'Y': 303, 'Total': 342},
    {'sno': 14, 'Aircraft': "787-8" ,'Registeration': "VT-AEM", 'Status': "NewE" , 
    'F': 8, 'C': 40, 'W': 0, 'Y': 280, 'Total': 328},
    {'sno': 15, 'Aircraft': "787-8" ,'Registeration': "VT-AEN", 'Status': "NewE" , 
    'F': 8, 'C': 40, 'W': 0, 'Y': 280, 'Total': 328},
    {'sno': 16, 'Aircraft': "787-8" ,'Registeration': "VT-AEO", 'Status': "NewE" , 
    'F': 8, 'C': 40, 'W': 0, 'Y': 280, 'Total': 328},
    {'sno': 17, 'Aircraft': "787-8" ,'Registeration': "VT-AEP", 'Status': "NewE" , 
    'F': 8, 'C': 40, 'W': 0, 'Y': 280, 'Total': 328},
    {'sno': 18, 'Aircraft': "787-8" ,'Registeration': "VT-AEQ", 'Status': "NewE" , 
    'F': 8, 'C': 40, 'W': 0, 'Y': 280, 'Total': 328},
    {'sno': 19, 'Aircraft': "787-8" ,'Registeration': "VT-AER", 'Status': "NewE" , 
    'F': 8, 'C': 40, 'W': 0, 'Y': 280, 'Total': 328},
];



const table777 = document.getElementById("B777Family");
const thead777 = document.createElement("thead");
const headerRow777 = document.createElement("tr");

headers777.forEach(header => {
    const th777 = document.createElement("th");
    th777.innerText = header;
    headerRow777.appendChild(th777);
})

thead777.appendChild(headerRow777);
table777.appendChild(thead777);

const tbody777 = document.createElement("tbody");

B777.forEach(element => {
    const row777 = document.createElement("tr");
    
    headers777.forEach(header777 => {
        const td777 = document.createElement("td");
        td777.innerText = element[header777] ?? "-";
        row777.appendChild(td777);
    })
    tbody777.appendChild(row777);
})
table777.appendChild(tbody777);
