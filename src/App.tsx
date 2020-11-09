import React, { useState } from 'react';
import { DashboardWrapper, PagesTable, ProcessesArray } from './components';
import { HeaderContainer, HeaderOption, HeaderSmallForm, HeaderInput } from './styles';
import PagesTableGenerator from './utils/PagesTableGenerator';

function App() {
  const [tamp, setTamp] = useState(4);
  const [tablePageConfig, setTablePageConfig] = useState(PagesTableGenerator(0));
  const [processesArray, setProcessesArray] = useState(
    {processArray: [
    {
      pid: "28252",
      npfRefs: [
        "010",
        "011",
        "1011",
        "1101011"
      ],
      processSize: 256,
      busyPages: 2,
    },
    {
      pid: "28252",
      npfRefs: [
        "010",
        "011",
        "1011",
        "1101011"
      ],
      processSize: 256,
      busyPages: 2,
    },
    {
      pid: "28252",
      npfRefs: [
        "010",
        "011",
        "1011",
        "1101011"
      ],
      processSize: 256,
      busyPages: 2,
    },
  ]});

  function handleDefineTamp(n : number){
    setTablePageConfig(
      PagesTableGenerator(n)
    );
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
          <HeaderInput type="number" placeholder="Insira o tamanho do processo em bytes" />
          <HeaderOption onClick={() => {}}>Adicionar Processo</HeaderOption>
        </HeaderSmallForm>
        <HeaderSmallForm>
          <strong>3º</strong>
          <HeaderInput type="number" placeholder="Insira o PID do processo" />
          <HeaderOption onClick={() => {}}>Remover Processo</HeaderOption>
        </HeaderSmallForm>
      </HeaderContainer>

      <DashboardWrapper
        left={<PagesTable tablePageConfig={tablePageConfig}/>}
        right={<ProcessesArray tamp={tamp} processArray={processesArray} />}
      />
    </div>
  );
}

export default App;
