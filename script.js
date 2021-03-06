const pollData = [
  {
    option: 'Spider-Man',
    votes: 11,
    backgroundColor: 'rgba(223, 31, 45, 0.6)',
    borderColor: 'rgb(223,31,45)',
  },
  {
    option: 'Superman',
    votes: 8,
    backgroundColor: 'rgba(49, 116, 153, 0.6)',
    borderColor: 'rgb(49, 116, 153)',
  },
  {
    option: 'Son Goku',
    votes: 5,
    backgroundColor: 'rgba(255, 159, 64, 0.6)',
    borderColor: 'rgb(255, 159, 64)',
  },
  {
    option: 'Batman',
    votes: 14,
    backgroundColor: 'rgba(36, 36, 36, 0.6)',
    borderColor: 'rgb(36, 36, 36)',
  },
  {
    option: 'Hulk',
    votes: 3,
    backgroundColor: 'rgba(155,192,99, 0.6)',
    borderColor: 'rgb(155,192,99)',
  },
  {
    option: 'Wolverine',
    votes: 7,
    backgroundColor: 'rgba(255,180,0, 0.6)',
    borderColor: 'rgb(255,180,0)',
  },
  {
    option: 'Other',
    votes: 10,
    backgroundColor: 'rgba(153,102,255, 0.3)',
    borderColor: 'rgb(153,102,255)',
  },
];

// ChartJS

// Change global font family for chart (also can change font size, color and style)
Chart.defaults.global.defaultFontFamily = "'Saira', sans-serif";

const ctx = document.getElementById('chart').getContext('2d');
const pollChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: pollData.map((pollOption) => pollOption.option),
    datasets: [
      {
        label: 'Number of Votes',
        data: pollData.map((pollVotes) => pollVotes.votes),
        backgroundColor: pollData.map((bgColor) => bgColor.backgroundColor),
        borderColor: pollData.map((bdrColor) => bdrColor.borderColor),
        borderWidth: 3,
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'The Best Superhero',
      fontColor: '#333',
      fontSize: 20,
      padding: 20,
    },
  },
});

// Apex Chart
var options = {
  chart: {
    type: 'line',
  },
  series: [
    {
      name: 'sales',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
    },
  ],
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
  },
};

var chart = new ApexCharts(document.querySelector('#chart-2'), options);

chart.render();