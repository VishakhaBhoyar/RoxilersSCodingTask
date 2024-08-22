app.get('/api/pie-chart', async (req, res) => {
    const { month } = req.query;
  
    const startDate = new Date(`2024-${month}-01`);
    const endDate = new Date(`2024-${month}-31`);
  
    try {
      const data = await Transaction.aggregate([
        { $match: { dateOfSale: { $gte: startDate, $lte: endDate } } },
        { $group: { _id: "$category", count: { $sum: 1 } } }
      ]);
  
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ message: 'Error fetching pie chart data', error });
    }
  });
  