import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TransactionsStats = ({ selectedMonth }) => {
  const [stats, setStats] = useState({
    totalAmount: 0,
    totalSoldItems: 0,
    totalNotSoldItems: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get('/api/transactions/stats', {
          params: {
            month: selectedMonth,
          },
        });
        setStats(response.data);
      } catch (error) {
        console.error('Error fetching stats:', error);
      }
    };
    fetchStats();
  }, [selectedMonth]);

  return (
    <div>
      <h3>Transaction Statistics</h3>
      <div>Total Amount: {stats.totalAmount}</div>
      <div>Total Sold Items: {stats.totalSoldItems}</div>
      <div>Total Not Sold Items: {stats.totalNotSoldItems}</div>
    </div>
  );
};

export default TransactionsStats;
