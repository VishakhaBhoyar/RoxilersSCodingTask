app.get('/api/transactions', async (req, res) => {
    const { month, page = 1, perPage = 10, search = '' } = req.query;
  
    const startDate = new Date(`2024-${month}-01`);
    const endDate = new Date(`2024-${month}-31`);
  
    try {
      const query = {
        dateOfSale: { $gte: startDate, $lte: endDate },
        $or: [
          { productTitle: new RegExp(search, 'i') },
          { productDescription: new RegExp(search, 'i') },
          { price: new RegExp(search, 'i') }
        ]
      };
  
      const transactions = await Transaction.find(query)
        .skip((page - 1) * perPage)
        .limit(Number(perPage))
        .exec();
  
      const totalCount = await Transaction.countDocuments(query);
  
      res.status(200).json({
        transactions,
        totalPages: Math.ceil(totalCount / perPage),
        currentPage: page
      });
    } catch (error) {
      res.status(500).json({ message: 'Error fetching transactions', error });
    }
  });
  