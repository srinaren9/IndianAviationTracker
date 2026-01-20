

const headersA320 = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'Location', 'Date Ferried', 'Date Finished', 'Durations (In Days)'];

const A320Refresh = [
    {'sno': 1, 'Aircraft': "a320neo" ,'Registeration': "VT-ATV", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 2, 'Aircraft': "a320neo" ,'Registeration': "VT-TNB", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 3, 'Aircraft': "a320neo" ,'Registeration': "VT-TNC", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 4, 'Aircraft': "a320neo" ,'Registeration': "VT-TNE", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 5, 'Aircraft': "a320neo" ,'Registeration': "VT-TNF", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 6, 'Aircraft': "a320neo" ,'Registeration': "VT-TNH", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 7, 'Aircraft': "a320neo" ,'Registeration': "VT-TNI", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 8, 'Aircraft': "a320neo" ,'Registeration': "VT-TNJ", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 9, 'Aircraft': "a320neo" ,'Registeration': "VT-TNK", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 10, 'Aircraft': "a320neo" ,'Registeration': "VT-TNP", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 11, 'Aircraft': "a320neo" ,'Registeration': "VT-TNQ", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 12, 'Aircraft': "a320neo" ,'Registeration': "VT-TNR", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 13, 'Aircraft': "a320neo" ,'Registeration': "VT-TNS", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 14, 'Aircraft': "a320neo" ,'Registeration': "VT-TNU", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 15, 'Aircraft': "a320neo" ,'Registeration': "VT-TNV", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 16, 'Aircraft': "a320neo" ,'Registeration': "VT-TNW", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 17, 'Aircraft': "a320neo" ,'Registeration': "VT-TNX", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 18, 'Aircraft': "a320neo" ,'Registeration': "VT-TNY", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 19, 'Aircraft': "a320neo" ,'Registeration': "VT-TNZ", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 20, 'Aircraft': "a320neo" ,'Registeration': "VT-TQA", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 21, 'Aircraft': "a320neo" ,'Registeration': "VT-TQB", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 22, 'Aircraft': "a320neo" ,'Registeration': "VT-TQC", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 23, 'Aircraft': "a320neo" ,'Registeration': "VT-TQD", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 24, 'Aircraft': "a320neo" ,'Registeration': "VT-TQE", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 25, 'Aircraft': "a320neo" ,'Registeration': "VT-TQF", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 26, 'Aircraft': "a320neo" ,'Registeration': "VT-TQG", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 27, 'Aircraft': "a320neo" ,'Registeration': "VT-TQH", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 28, 'Aircraft': "a320neo" ,'Registeration': "VT-TQI", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 29, 'Aircraft': "a320neo" ,'Registeration': "VT-TQJ", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 30, 'Aircraft': "a320neo" ,'Registeration': "VT-TQK", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 31, 'Aircraft': "a320neo" ,'Registeration': "VT-TQL", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 32, 'Aircraft': "a320neo" ,'Registeration': "VT-TQM", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 33, 'Aircraft': "a320neo" ,'Registeration': "VT-TQN", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 34, 'Aircraft': "a320neo" ,'Registeration': "VT-TQO", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 35, 'Aircraft': "a320neo" ,'Registeration': "VT-TQP", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 36, 'Aircraft': "a320neo" ,'Registeration': "VT-TQQ", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 37, 'Aircraft': "a320neo" ,'Registeration': "VT-TQR", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 38, 'Aircraft': "a320neo" ,'Registeration': "VT-TQS", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 39, 'Aircraft': "a320neo" ,'Registeration': "VT-TQT", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 40, 'Aircraft': "a320neo" ,'Registeration': "VT-TQU", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 41, 'Aircraft': "a320neo" ,'Registeration': "VT-TQV", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 42, 'Aircraft': "a320neo" ,'Registeration': "VT-TQW", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 43, 'Aircraft': "a320neo" ,'Registeration': "VT-TQX", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 44, 'Aircraft': "a320neo" ,'Registeration': "VT-TNL", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 45, 'Aircraft': "a320neo" ,'Registeration': "VT-TNM", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 46, 'Aircraft': "a320neo" ,'Registeration': "VT-TNN", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 47, 'Aircraft': "a320neo" ,'Registeration': "VT-TYA", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 48, 'Aircraft': "a320neo" ,'Registeration': "VT-TYB", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 49, 'Aircraft': "a320neo" ,'Registeration': "VT-TYC", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 50, 'Aircraft': "a320neo" ,'Registeration': "VT-TYD", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 51, 'Aircraft': "a320neo" ,'Registeration': "VT-TYE", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 52, 'Aircraft': "a320neo" ,'Registeration': "VT-TYF", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 53, 'Aircraft': "a320neo" ,'Registeration': "VT-TYG", 'Status': "To Be Refreshed" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
];


const table320R = document.getElementById("A320neoRefresh");

const thead320R = document.createElement("thead");
const headerRow320R = document.createElement("tr");

headersA320.forEach(header => {
    const th320R = document.createElement("th");
    th320R.innerText = header;
    headerRow320R.appendChild(th320R);
})

thead320R.appendChild(headerRow320R);
table320R.appendChild(thead320R);

const tbody320R = document.createElement("tbody");

A320Refresh.forEach(element => {
    const row320R = document.createElement("tr");
    
    headersA320.forEach(header320R => {
        const td320R = document.createElement("td");
        td320R.innerText = element[header320R] ?? "-";
        row320R.appendChild(td320R);
    })
    tbody320R.appendChild(row320R);
})
table320R.appendChild(tbody320R);
