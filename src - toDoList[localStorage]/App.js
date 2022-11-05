import { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import './App.css'

const filters = ['all', 'active', 'completed']

function App() {
  const [filter, setfilter] = useState(filters[0])


  return (
    <>
      <Header filters={filters} filter={filter} onFilterChange={filter => setfilter(filter)} />
      <TodoList filter={filter} />
    </>
  );
}


export default App;
