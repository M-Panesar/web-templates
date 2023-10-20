import './App.css';
import Api from './components/Api';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { useState } from 'react';

function App() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="App">
      <Navbar setSearchTerm={setSearchTerm}/>
      <Header setSearchTerm={setSearchTerm}/>
      <Api searchTerm={searchTerm}/>
    </div>
  );
}

export default App;