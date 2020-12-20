const pollData = [
  {
    option: 'Spider-Man',
    votes: 11,
    color: 'rgb(223, 31, 45)',
  },
  {
    option: 'Superman',
    votes: 8,
    color: 'rgb(49, 116, 153)',
  },
  {
    option: 'Son Goku',
    votes: 5,
    color: 'rgb(255, 159, 64)',
  },
  {
    option: 'Batman',
    votes: 14,
    color: 'rgb(36, 36, 36)',
  },
  {
    option: 'Hulk',
    votes: 3,
    color: 'rgb(155,192,99)',
  },
  {
    option: 'Wolverine',
    votes: 7,
    color: 'rgb(255,180,0)',
  },
  {
    option: 'Other',
    votes: 10,
    color: 'rgb(153,102,255)',
  },
];

const ctx = document.getElementById('chart').getContext('2d');
const pollChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        hoverBackgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderWidth: 5,
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
  },
});
