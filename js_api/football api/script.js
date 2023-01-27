function loadTable() {
    fetch("https://api.openligadb.de/getbltable/la/2022").then((result) => {
        result.json().then((data) => {
            outputTable(data)
        })
    })
}

function outputTable(data) {
    let html = "";
    
    data.forEach(element => {
        html += "<div><img src=" + element.teamIconUrl +" width='32' height='32'></img><h1>" + element.teamName + "</h1><p>Points: " + element.points + "</p></div>"
        });
    document.getElementById("content").innerHTML=html;
}

loadTable()

