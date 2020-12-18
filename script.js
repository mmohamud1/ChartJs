// Dom elements
let myChart = document.getElementById('myChart').getContext('2d');

// Object 
let popChart = new Chart(myChart, {
    type: 'bar', // bar, horizontal bar, pie, line, donut, radar, polar area
    data: {
        labels: ['Barnet', 'Croydon', 'Newham', 'Ealing', 'Enfield'],
        datasets: []
    },
    option: {}
})