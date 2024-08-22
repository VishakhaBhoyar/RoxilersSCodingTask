import React, { useState } from 'react';
import TransactionsTable from './components/TransactionsTable.jsx';
import TransactionsStats from './components/TransactionsStats.jsx';
import TransactionsChart from './components/TransactionsChart.jsx';

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function App() {
  const [selectedMonth, setSelectedMonth] = useState('March');
  const [searchQuery, setSearchQuery] = useState('');

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <h1>Transactions Dashboard</h1>
      <select value={selectedMonth} onChange={handleMonthChange}>
        {months.map((month) => (
          <option key={month} value={month}>{month}</option>
        ))}
      </select>
      <TransactionsTable 
        selectedMonth={selectedMonth} 
        searchQuery={searchQuery} 
        onSearch={handleSearch}
        onNext={() => console.log('Next Page')}
        onPrevious={() => console.log('Previous Page')}
      />
      <TransactionsStats selectedMonth={selectedMonth} />
      <TransactionsChart selectedMonth={selectedMonth} />
    </div>
  );
}

export default App;
