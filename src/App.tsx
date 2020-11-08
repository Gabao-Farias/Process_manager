import React from 'react';
import { PagesTable, ProcessTable } from './components';
import Header from './components/Header';
import PagesTableGenerator from './utils/PagesTableGenerator';


function App() {

  return (
    <div className="App" style={{backgroundColor: "#333333"}}>
      <Header/>
      <PagesTable tablePageConfig={PagesTableGenerator(16)}/>
      <ProcessTable process={{
        pid: "2",
        processSize: 256,
        fragmentSize: 50
      }} />
    </div>
  );
}

export default App;
