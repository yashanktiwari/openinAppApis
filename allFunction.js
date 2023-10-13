// Defining all the functions;
module.exports.getDummyData = (req, res) => {
  const data = [
    {
      title: "Total Revenues",
      value: 219430,
      profitPercent: 2.5,
      bgColor: "#7FCD93",
    },
    {
      title: "Total Transactions",
      value: 1520,
      profitPercent: 1.7,
      bgColor: "#DEBF85",
    },
    {
      title: "Total Likes",
      value: 9721,
      profitPercent: 1.4,
      bgColor: "#ECA4A4",
    },
    {
      title: "Total Users",
      value: 9721,
      profitPercent: 4.2,
      bgColor: "#A9B0E5",
    },
  ];

  res.send(data);
};

module.exports.getBarChartData = (req, res) => {
  const data = [
    {
      user: 200,
      guest: 300,
      name: "Week 1",
    },
    {
      user: 500,
      guest: 400,
      name: "Week 2",
    },
    {
      user: 100,
      guest: 200,
      name: "Week 3",
    },
    {
      user: 300,
      guest: 300,
      name: "Week 4",
    },
  ];
  res.send(data);
};

module.exports.getPieChartData = (req, res) => {
  const data = {
    labels: ['Basic Trees', 'Custom Short Pants', 'Super Hoodies'],
    datasets: [
      {
        label: '% of Votes',
        data: [14, 31, 55],
        backgroundColor: [
          '#EE8484',
          '#F6DC7D',
          '#0CD664',
        ],
        borderColor: [
          '#EE8484',
          '#F6DC7D',
          '#0CD664',
        ],
        borderWidth: 1,
      },
    ],
  };
  res.send(data);
};
