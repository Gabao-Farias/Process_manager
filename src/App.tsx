import React, { useState } from 'react';
import { DashboardWrapper, PagesTable, ProcessTable } from './components';
import Header from './components/Header';
import PagesTableGenerator from './utils/PagesTableGenerator';


function App() {
  const [tablePageConfig, setTablePageConfig] = useState(PagesTableGenerator(0));

  return (
    <div className="App" style={{backgroundColor: "#333333", minHeight: "100vh"}}>
      <Header defineTamp={() => setTablePageConfig} />
      <DashboardWrapper
        left={<PagesTable tablePageConfig={tablePageConfig}/>}
        right={
          <ProcessTable process={{
            pid: "28252",
            processSize: 256,
            fragmentSize: 50
          }} />
        }
      />
    </div>
  );
}

export default App;
