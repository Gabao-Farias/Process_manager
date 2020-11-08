import React from 'react';
import { PagesTable } from './components';
import Header from './components/Header';
import GeradorTabela from './utils/GeradorTabela';



function App() {

  return (
    <div className="App" style={{backgroundColor: "#333333"}}>
      <Header/>
      <PagesTable tablePageConfig={GeradorTabela(16)} />
    </div>
  );
}

export default App;
