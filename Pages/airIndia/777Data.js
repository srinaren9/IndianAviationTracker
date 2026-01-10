

const headers777 = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'Location', 'Date Ferried', 'Date Finished', 'Durations (In Days)'];

const B777Refurbishment = [
    {'sno': 1, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALJ", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 2, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALK", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 3, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALL", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 4, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALM", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 5, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALN", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 6, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALO", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 7, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALP", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 8, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALQ", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 9, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALR", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 10, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALS", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 11, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALT", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 12, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALU", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 13, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALX", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
];



const table777 = document.getElementById("B777Refurbishment");

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

B777Refurbishment.forEach(element => {
    const row777 = document.createElement("tr");
    
    headers777.forEach(header777 => {
        const td777 = document.createElement("td");
        td777.innerText = element[header777] ?? "-";
        row777.appendChild(td777);
    })
    tbody777.appendChild(row777);
})
table777.appendChild(tbody777);
