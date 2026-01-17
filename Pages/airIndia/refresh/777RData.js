

const headers777R = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'Location', 'Date Ferried', 'Date Finished', 'Durations (In Days)'];

const B777Refresh = [
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



const table777R = document.getElementById("B777Refresh");

const thead777R = document.createElement("thead");
const headerRow777R = document.createElement("tr");

headers777R.forEach(header => {
    const th777R = document.createElement("th");
    th777R.innerText = header;
    headerRow777R.appendChild(th777R);
})

thead777R.appendChild(headerRow777R);
table777R.appendChild(thead777R);

const tbody777R = document.createElement("tbody");

B777Refresh.forEach(element => {
    const row777R = document.createElement("tr");
    
    headers777R.forEach(header777R => {
        const td777R = document.createElement("td");
        td777R.innerText = element[header777R] ?? "-";
        row777R.appendChild(td777R);
    })
    tbody777R.appendChild(row777R);
})
table777R.appendChild(tbody777R);
