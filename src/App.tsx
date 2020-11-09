import React, { useState } from 'react';
import { DashboardWrapper, PagesTable, ProcessesArray } from './components';
import { HeaderContainer, HeaderOption, HeaderSmallForm, HeaderInput } from './styles';
import { PagesTableSize, VerifyAvailablePages } from './utils';
import PagesTableGenerator from './utils/PagesTableGenerator';

function App() {
  const [tamp, setTamp] = useState(1024);
  const [tablePageConfig, setTablePageConfig] = useState(PagesTableGenerator(8));
  const [processesArray, setProcessesArray] = useState({processArray: []});

  function handleDefineTamp(tamp : number){
    setTablePageConfig(
      PagesTableGenerator(
        PagesTableSize(tamp)
      )
    );
    setProcessesArray({processArray: []});
  }

  function handleAddNewProcess(){
    console.log(VerifyAvailablePages(tablePageConfig));
  }

  return (
    <div className="App" style={{backgroundColor: "#333333", minHeight: "100vh"}}>
      <HeaderContainer>
        <HeaderSmallForm>
          <strong>1º</strong>
          <HeaderInput placeholder="Insira o tamanho da página em bytes" value={tamp} onChange={(e: { target: { value: any; }; }) => {setTamp(Number(e.target.value))}} />
          <HeaderOption onClick={() => handleDefineTamp(tamp)}>Definir tamanho da página</HeaderOption>
        </HeaderSmallForm>
        <HeaderSmallForm>
          <strong>2º</strong>
          <HeaderInput type="number" placeholder="Tamanho do processo (bytes)" />
          <HeaderOption onClick={() => {handleAddNewProcess()}}>Adicionar Processo</HeaderOption>
        </HeaderSmallForm>
        <HeaderSmallForm>
          <strong>3º</strong>
          <HeaderInput type="number" placeholder="PID do processo" />
          <HeaderOption onClick={() => {}}>Remover Processo</HeaderOption>
        </HeaderSmallForm>
      </HeaderContainer>

      <DashboardWrapper
        left={<PagesTable tamp={tamp} tablePageConfig={tablePageConfig}/>}
        right={<ProcessesArray tamp={tamp} processArray={processesArray} />}
      />
    </div>
  );
}

export default App;
