function loadTable() {
    fetch("https://app.sportdataapi.com/api/v1/soccer/matches?apikey=96ff5510-a15e-11ed-99e1-b744a843a752&season_id=2100&status_code=3").then((result) => {
        result.json().then((data) => {
            outputTable(data)
        })
    })
}

function outputTable(data) {
    let html = "";
    
    data.forEach(element => {
        html += "<div>" + element.data.match_id + "</div>"
        });
    document.getElementById("standings").innerHTML=html;
}

loadTable()