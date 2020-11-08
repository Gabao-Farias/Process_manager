import React from 'react';
import { PagesTable } from './components';
import Header from './components/Header';

const array = [{},{},{},{}];

const testParams = [
  {
    pageNumber: "0",
    npf: "0000",
    used: false
  },
  {
    pageNumber: "1",
    npf: "0001",
    used: false
  },
  {
    pageNumber: "2",
    npf: "0010",
    used: false
  },
  {
    pageNumber: "3",
    npf: "0011",
    used: false
  },
];

function App() {

  return (
    <div className="App" style={{backgroundColor: "#333333"}}>
      <Header/>
      <PagesTable tablePageConfig={testParams} />
    </div>
  );
}

export default App;
