

const headers787R = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'Location', 'Date Ferried', 'Date Finished', 'Durations (In Days)'];

const B787Refresh = [
    {'sno': 1, 'Aircraft': "787-9" ,'Registeration': "VT-TSD", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 2, 'Aircraft': "787-9" ,'Registeration': "VT-TSE", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 3, 'Aircraft': "787-9" ,'Registeration': "VT-TSH", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 4, 'Aircraft': "787-9" ,'Registeration': "VT-TSN", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 5, 'Aircraft': "787-9" ,'Registeration': "VT-TSO", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 6, 'Aircraft': "787-9" ,'Registeration': "VT-TSP", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
];



const table787R = document.getElementById("B787Refresh");

const thead787R = document.createElement("thead");
const headerRow787R = document.createElement("tr");

headers787R.forEach(header => {
    const th787R = document.createElement("th");
    th787R.innerText = header;
    headerRow787R.appendChild(th787R);
})

thead787R.appendChild(headerRow787R);
table787R.appendChild(thead787R);

const tbody787R = document.createElement("tbody");

B787Refresh.forEach(element => {
    const row787R = document.createElement("tr");
    
    headers787R.forEach(header787R => {
        const td787R = document.createElement("td");
        td787R.innerText = element[header787R] ?? "-";
        row787R.appendChild(td787R);
    })
    tbody787R.appendChild(row787R);
})
table787R.appendChild(tbody787R);
