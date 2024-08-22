app.get('/api/statistics', async (req, res) => {
    const { month } = req.query;
  
    const startDate = new Date(`2024-${month}-01`);
    const endDate = new Date(`2024-${month}-31`);
  
    try {
      const soldItems = await Transaction.countDocuments({ dateOfSale: { $gte: startDate, $lte: endDate }, sold: true });
      const notSoldItems = await Transaction.countDocuments({ dateOfSale: { $gte: startDate, $lte: endDate }, sold: false });
      const totalAmount = await Transaction.aggregate([
        { $match: { dateOfSale: { $gte: startDate, $lte: endDate }, sold: true } },
        { $group: { _id: null, total: { $sum: "$price" } } }
      ]);
  
      res.status(200).json({
        totalSaleAmount: totalAmount[0] ? totalAmount[0].total : 0,
        totalSoldItems: soldItems,
        totalNotSoldItems: notSoldItems
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching statistics', error });
    }
  });
  