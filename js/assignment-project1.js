var team = [{
        name: "Juhász Dorottya",
        age: 25,
        hobby: "Reading"
    },
    {
        name: "Oláh Dániel",
        age: 23,
        hobby: "Powerlifting"
    },
    {
        name: "Gábriel Evelin",
        age: 39,
        hobby: "Gardening"
    },
    {
        name: "Kosóczki Éva",
        age: 29,
        hobby: "Yoga"
    },
    {
        name: "Szabó Dániel Zoltán",
        age: 29,
        hobby: "Video Games"
    }
];

var tryvan;
tryvan = document.getElementById("try")

team.forEach(myFunction);

function myFunction(asd) {
    tryvan.innerHTML = tryvan.innerHTML + asd.name + "<br>" + asd.age + "<br>" + asd.hobby + "<br>" + "<br>"
}