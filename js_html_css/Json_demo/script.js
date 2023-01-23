let data = [{
        firstName: "Hans",
        lastName: "Huber",
        points: 30
    },
    {
        firstName: "Paul",
        lastName: "Müller",
        points: 36
    },
    {
        firstName: "Franz",
        lastName: "Hauser",
        points: 38
    },
];

function loadPeople() {
    let html = "";
    data.forEach(element => {
        html += "<div id='" + element.firstName + "'>" + element.firstName + " " + element.lastName + " Points: " + element.points + " " + "</div>"
        console.log(element.start)

    });

    document.getElementById("content").innerHTML = html;

}

loadPeople();