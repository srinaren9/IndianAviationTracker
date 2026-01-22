

const headers320 = 
[ 'sno', 'Aircraft', 'Registeration', 'Status', 'Location', 'Date Ferried', 'Date Finished', 'Durations (In Days)'];

const A320Refurbishment = [
    {'sno': 1, 'Aircraft': "a320neo" ,'Registeration': "VT-EXF", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "08 April 2025", 'Date Finished': "25 April 2025",'Durations (In Days)': "17"},
    {'sno': 2, 'Aircraft': "a320neo" ,'Registeration': "VT-EXG", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "18 March 2025", 'Date Finished': "05 April 2025",'Durations (In Days)': "18"},
    {'sno': 3, 'Aircraft': "a320neo" ,'Registeration': "VT-EXH", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "24 April 2025", 'Date Finished': "11 May 2025",'Durations (In Days)': "18"},
    {'sno': 4, 'Aircraft': "a320neo" ,'Registeration': "VT-EXI", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "02 July 2025", 'Date Finished': "18 July 2025",'Durations (In Days)': "16"},
    {'sno': 5, 'Aircraft': "a320neo" ,'Registeration': "VT-EXJ", 'Status': "Refurbished" , 
    'Location': "Hyderabad", 'Date Ferried': "13 July 2025", 'Date Finished': "02 August 2025",'Durations (In Days)': "20"},
    {'sno': 6, 'Aircraft': "a320neo" ,'Registeration': "VT-EXK", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "21 July 2025", 'Date Finished': "09 August 2025",'Durations (In Days)': "19"},
    {'sno': 7, 'Aircraft': "a320neo" ,'Registeration': "VT-EXL", 'Status': "Refurbished" , 
    'Location': "Hyderabad", 'Date Ferried': "16 September 2025", 'Date Finished': "06 September 2025",'Durations (In Days)': "21"},
    {'sno': 8, 'Aircraft': "a320neo" ,'Registeration': "VT-EXM", 'Status': "Refurbished" , 
    'Location': "Hyderabad", 'Date Ferried': "05 September 2025", 'Date Finished': "26 September 2025",'Durations (In Days)': "21"},
    {'sno': 9, 'Aircraft': "a320neo" ,'Registeration': "VT-EXN", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "17 September 2024", 'Date Finished': "27 February 2025",'Durations (In Days)': "163"},
    {'sno': 10, 'Aircraft': "a320neo" ,'Registeration': "VT-EXO", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "26 September 2025", 'Date Finished': "14 October 2025",'Durations (In Days)': "18"},
    {'sno': 11, 'Aircraft': "a320neo" ,'Registeration': "VT-EXP", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "01 March 2025", 'Date Finished': "19 March 2025",'Durations (In Days)': "18"},
    {'sno': 12, 'Aircraft': "a320neo" ,'Registeration': "VT-EXQ", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "20 February 2025", 'Date Finished': "03 April 2025",'Durations (In Days)': "42"},
    {'sno': 13, 'Aircraft': "a320neo" ,'Registeration': "VT-EXR", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "24 April 2025", 'Date Finished': "12 June 2025",'Durations (In Days)': "49"},
    {'sno': 14, 'Aircraft': "a320neo" ,'Registeration': "VT-EXS", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "20 March 2025", 'Date Finished': "02 May 2025",'Durations (In Days)': "43"},
    {'sno': 15, 'Aircraft': "a320neo" ,'Registeration': "VT-EXT", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "11 May 2025", 'Date Finished': "29 May 2025",'Durations (In Days)': "18"},
    {'sno': 16, 'Aircraft': "a320neo" ,'Registeration': "VT-EXU", 'Status': "Refurbished" , 
    'Location': "Hyderabad", 'Date Ferried': "23 June 2025", 'Date Finished': "12 July 2025",'Durations (In Days)': "19"},
    {'sno': 17, 'Aircraft': "a320neo" ,'Registeration': "VT-EXFV", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "12 June 2025", 'Date Finished': "20 July 2025",'Durations (In Days)': "38"},
    {'sno': 18, 'Aircraft': "a320neo" ,'Registeration': "VT-CID", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "18 July 2025", 'Date Finished': "18 August 2025",'Durations (In Days)': "31"},
    {'sno': 19, 'Aircraft': "a320neo" ,'Registeration': "VT-CIE", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "08 June 2025", 'Date Finished': "01 July 2025",'Durations (In Days)': "23"},
    {'sno': 20, 'Aircraft': "a320neo" ,'Registeration': "VT-CIF", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "31 May 2025", 'Date Finished': "13 August 2025",'Durations (In Days)': "74"},
    {'sno': 21, 'Aircraft': "a320neo" ,'Registeration': "VT-CIG", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "09 August 2025", 'Date Finished': "04 September 2025",'Durations (In Days)': "26"},
    {'sno': 22, 'Aircraft': "a320neo" ,'Registeration': "VT-CIH", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "18 August 2025", 'Date Finished': "04 September 2025",'Durations (In Days)': "17"},
    {'sno': 23, 'Aircraft': "a320neo" ,'Registeration': "VT-CIM", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "12 October 2025", 'Date Finished': "31 October 2025",'Durations (In Days)': "19"},
    {'sno': 24, 'Aircraft': "a320neo" ,'Registeration': "VT-CIN", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "04 September 2025", 'Date Finished': "17 October 2025",'Durations (In Days)': "23"},
    {'sno': 25, 'Aircraft': "a320neo" ,'Registeration': "VT-CIO", 'Status': "Refurbished" , 
    'Location': "Nagpur", 'Date Ferried': "04 September 2025", 'Date Finished': "24 September 2025",'Durations (In Days)': "20"},
    {'sno': 26, 'Aircraft': "a320neo" ,'Registeration': "VT-CIP", 'Status': "Refurbished" , 
    'Location': "Hosur", 'Date Ferried': "04 September 2025", 'Date Finished': "24 September 2025",'Durations (In Days)': "20"},
    {'sno': 27, 'Aircraft': "a320neo" ,'Registeration': "VT-CIQ", 'Status': "Refurbished" , 
    'Location': "Hyderabad", 'Date Ferried': "01 August 2025", 'Date Finished': "16 August 2025",'Durations (In Days)': "15"},
    {'sno': 28, 'Aircraft': "a321-200" ,'Registeration': "VT-PPH", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 29, 'Aircraft': "a321-200" ,'Registeration': "VT-PPI", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 30, 'Aircraft': "a321-200" ,'Registeration': "VT-PPJ", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 31, 'Aircraft': "a321-200" ,'Registeration': "VT-PPK", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 32, 'Aircraft': "a321-200" ,'Registeration': "VT-PPL", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 33, 'Aircraft': "a321-200" ,'Registeration': "VT-PPM", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 34, 'Aircraft': "a321-200" ,'Registeration': "VT-PPO", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 35, 'Aircraft': "a321-200" ,'Registeration': "VT-PPQ", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 36, 'Aircraft': "a321-200" ,'Registeration': "VT-PPT", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 37, 'Aircraft': "a321-200" ,'Registeration': "VT-PPU", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 38, 'Aircraft': "a321-200" ,'Registeration': "VT-PPV", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 39, 'Aircraft': "a321-200" ,'Registeration': "VT-PPW", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 40, 'Aircraft': "a321-200" ,'Registeration': "VT-PPX", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 41, 'Aircraft': "a320-200" ,'Registeration': "VT-EDC", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 42, 'Aircraft': "a320-200" ,'Registeration': "VT-EDD", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 43, 'Aircraft': "a320-200" ,'Registeration': "VT-EDE", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
    {'sno': 44, 'Aircraft': "a320-200" ,'Registeration': "VT-EDF", 'Status': "To Be Refurbished" , 
    'Location': "-", 'Date Ferried': "-", 'Date Finished': "-",'Durations (In Days)': "-"},
];



const table320 = document.getElementById("a320neoRefurbishment");

const thead320 = document.createElement("thead");
const headerRow320 = document.createElement("tr");

headers320.forEach(header => {
    const th320 = document.createElement("th");
    th320.innerText = header;
    headerRow320.appendChild(th320);
})

thead320.appendChild(headerRow320);
table320.appendChild(thead320);

const tbody320 = document.createElement("tbody");

A320Refurbishment.forEach(element => {
    const row320 = document.createElement("tr");
    
    headers320.forEach(header320 => {
        const td320 = document.createElement("td");
        td320.innerText = element[header320] ?? "-";
        row320.appendChild(td320);
    })
    tbody320.appendChild(row320);
})
table320.appendChild(tbody320);
