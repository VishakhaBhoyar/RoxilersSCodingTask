app.get('/api/bar-chart', async (req, res) => {
    const { month } = req.query;
  
    const startDate = new Date(`2024-${month}-01`);
    const endDate = new Date(`2024-${month}-31`);
  
    try {
      const priceRanges = [
        { $match: { dateOfSale: { $gte: startDate, $lte: endDate } } },
        { $bucket: {
          groupBy: "$price",
          boundaries: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, Infinity],
          default: "Other",
          output: {
            count: { $sum: 1 }
          }
        }}
      ];
  
      const data = await Transaction.aggregate(priceRanges);
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching bar chart data', error });
    }
  });
  