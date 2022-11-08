import { useState } from 'react';
import Header from './Header';
import TodoList from './TodoList';
import './App.css'
import { DarkModeProvider } from './DarkModeContext';

const filters = ['all', 'active', 'completed']

function App() {
  const [filter, setfilter] = useState(filters[0])


  return (
    <DarkModeProvider>
      <Header filters={filters} filter={filter}
        onFilterChange={setfilter} />
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}


export default App;
