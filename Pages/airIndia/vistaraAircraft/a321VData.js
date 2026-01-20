

const headersA321 = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'Location', 'Date Ferried', 'Date Finished', 'Durations (In Days)'];

const A321Refresh = [
    {'sno': 1, 'Aircraft': "A321neo" ,'Registeration': "VT-TVA", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 2, 'Aircraft': "A321neo" ,'Registeration': "VT-TVB", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 3, 'Aircraft': "A321neo" ,'Registeration': "VT-TVC", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 4, 'Aircraft': "A321neo" ,'Registeration': "VT-TVD", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 5, 'Aircraft': "A321neo" ,'Registeration': "VT-TVE", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 6, 'Aircraft': "A321neo" ,'Registeration': "VT-TVF", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 7, 'Aircraft': "A321neo" ,'Registeration': "VT-TVG", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 8, 'Aircraft': "A321neo" ,'Registeration': "VT-TVH", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 9, 'Aircraft': "A321neo" ,'Registeration': "VT-TVI", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 10, 'Aircraft': "A321neo" ,'Registeration': "VT-TVJ", 'Status': "To Be Refreshed" , 
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
