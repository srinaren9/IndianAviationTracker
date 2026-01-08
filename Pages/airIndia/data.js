

const headers = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'Location', 'Date Ferried', 'Date Finished', 'Duration (In Days)'];

const B787Refurbishment = [
    {'sno': 1, 'Aircraft': "787-8" ,'Registeration': "VT-ANA", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 2, 'Aircraft': "787-8" ,'Registeration': "VT-ANC", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 3, 'Aircraft': "787-8" ,'Registeration': "VT-AND", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 4, 'Aircraft': "787-8" ,'Registeration': "VT-ANE", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 5, 'Aircraft': "787-8" ,'Registeration': "VT-ANG", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 6, 'Aircraft': "787-8" ,'Registeration': "VT-ANH", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 7, 'Aircraft': "787-8" ,'Registeration': "VT-ANI", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 8, 'Aircraft': "787-8" ,'Registeration': "VT-ANJ", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 9, 'Aircraft': "787-8" ,'Registeration': "VT-ANK", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 10, 'Aircraft': "787-8" ,'Registeration': "VT-ANL", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 11, 'Aircraft': "787-8" ,'Registeration': "VT-ANM", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 12, 'Aircraft': "787-8" ,'Registeration': "VT-ANN", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 13, 'Aircraft': "787-8" ,'Registeration': "VT-ANO", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 14, 'Aircraft': "787-8" ,'Registeration': "VT-ANP", 'Status': "Ongoing" , 
    'Location': "Victorville", 'Date Ferried': "1 October 2025", 'Date Finished': "Ongoing",'Durations (In Days)': "Ongoing"},
    {'sno': 15, 'Aircraft': "787-8" ,'Registeration': "VT-ANQ", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 16, 'Aircraft': "787-8" ,'Registeration': "VT-ANR", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 17, 'Aircraft': "787-8" ,'Registeration': "VT-ANS", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 18, 'Aircraft': "787-8" ,'Registeration': "VT-ANT", 'Status': "Ongoing" , 
    'Location': "Victorville", 'Date Ferried': "24 July 2025", 'Date Finished': "Ongoing",'Durations (In Days)': "Ongoing"},
    {'sno': 19, 'Aircraft': "787-8" ,'Registeration': "VT-ANU", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 20, 'Aircraft': "787-8" ,'Registeration': "VT-ANV", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 21, 'Aircraft': "787-8" ,'Registeration': "VT-ANW", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 22, 'Aircraft': "787-8" ,'Registeration': "VT-ANX", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 23, 'Aircraft': "787-8" ,'Registeration': "VT-ANY", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 24, 'Aircraft': "787-8" ,'Registeration': "VT-ANZ", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 25, 'Aircraft': "787-8" ,'Registeration': "VT-NAA", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 26, 'Aircraft': "787-8" ,'Registeration': "VT-NAC", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"}
];

let table = document.getElementById("B787Refurbishment");

B787Refurbishment.forEach(element => {
    let row = document.createElement("tr");

    for(let key in element){
        let cell = document.createElement("td");
        cell.innerText = element[key];
        row.appendChild(cell);
    }

    table.appendChild(row);
});


console.log(table);