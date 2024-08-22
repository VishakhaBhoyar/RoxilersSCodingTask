app.get('/api/combined-data', async (req, res) => {
    const { month } = req.query;
  
    try {
      const [transactions, stats, barChart, pieChart] = await Promise.all([
        axios.get(`http://localhost:5000/api/transactions?month=${month}`),
        axios.get(`http://localhost:5000/api/statistics?month=${month}`),
        axios.get(`http://localhost:5000/api/bar-chart?month=${month}`),
        axios.get(`http://localhost:5000/api/pie-chart?month=${month}`)
      ]);
  
      res.status(200).json({
        transactions: transactions.data,
        statistics: stats.data,
        barChart: barChart.data,
        pieChart: pieChart.data
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching combined data', error });
    }
  });
  