

const headersA321 = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'Location', 'Date Ferried', 'Date Finished', 'Durations (In Days)'];

const A321Refresh = [
    {'sno': 1, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALJ", 'Status': "Refreshed" , 
    'Location': "Singapore", 'Date Ferried': "3 April 2025", 'Date Finished': "23 May 2025",'Durations (In Days)': "51"},
    {'sno': 2, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALK", 'Status': "Refreshed" , 
    'Location': "Singapore", 'Date Ferried': "02 February 2025", 'Date Finished': "2 April 2025",'Durations (In Days)': "59"},
    {'sno': 3, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALL", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 4, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALM", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 5, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALN", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 6, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALO", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 7, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALP", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 8, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALQ", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 9, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALR", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 10, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALS", 'Status': "Refreshed" , 
    'Location': "Singapore", 'Date Ferried': "22 May 2025", 'Date Finished': "8 August 2025",'Durations (In Days)': "78"},
    {'sno': 11, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALT", 'Status': "Refreshed" , 
    'Location': "Mumbai", 'Date Ferried': "3 October 2025", 'Date Finished': "6 November 2025",'Durations (In Days)': "34"},
    {'sno': 12, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALU", 'Status': "Refreshed" , 
    'Location': "Singapore", 'Date Ferried': "8 August 2025", 'Date Finished': "30 September 2025",'Durations (In Days)': "53"},
    {'sno': 13, 'Aircraft': "777-300ER" ,'Registeration': "VT-ALX", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
];



const table321R = document.getElementById("A321neoRefresh");

const thead321R = document.createElement("thead");
const headerRow321R = document.createElement("tr");

headersA321.forEach(header => {
    const th321R = document.createElement("th");
    th321R.innerText = header;
    headerRow321R.appendChild(th321R);
})

thead321R.appendChild(headerRow321R);
table321R.appendChild(thead321R);

const tbody321R = document.createElement("tbody");

A321Refresh.forEach(element => {
    const row321R = document.createElement("tr");
    
    headersA321.forEach(header321R => {
        const td321R = document.createElement("td");
        td321R.innerText = element[header321R] ?? "-";
        row321R.appendChild(td321R);
    })
    tbody321R.appendChild(row321R);
})
table321R.appendChild(tbody321R);
