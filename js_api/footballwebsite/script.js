
function getGameday() {
    let gameday = document.getElementById("input").value;


const apiurl = "https://api.openligadb.de/getmatchdata/legaseriea/2018/" + gameday;

function loadTable() {
    fetch(apiurl).then((result) => {
        result.json().then((data) => {
            outputTable(data)
        })
    })
}

function outputTable(data) {
    let html = "";
    
    data.forEach((match) => {
        if (match.matchIsFinished) {
          html += `<div class="matches"><img class="teamIMG" src="${match.team1.teamIconUrl}" alt="Team Icon"> <p class="result">${match.matchResults[0].pointsTeam1} : ${match.matchResults[0].pointsTeam2}</p><img class="teamIMG" src="${match.team2.teamIconUrl}" alt="Team Icon"></div>`;
        }
      });
    document.getElementById("standings").innerHTML=html;
}

loadTable()
}