import React, { useState } from 'react';
import { DashboardWrapper, PagesTable, ProcessesArray } from './components';
import { HeaderContainer, HeaderOption, HeaderSmallForm, HeaderInput } from './styles';
import { AddNewProcess, GetNpfRefs, PagesTableSize, StartProcessesArray, VerifyAmmountPageProcess, VerifyAvailablePages } from './utils';
import PagesTableGenerator from './utils/PagesTableGenerator';

function App() {
  const [pageSize, setPageSize] = useState(1024);
  const [tablePageConfig, setTablePageConfig] = useState(PagesTableGenerator(8));
  const [processesArray, setProcessesArray] = useState(StartProcessesArray());

  function handleDefineTamp(tamp : number){
    setTablePageConfig(
      PagesTableGenerator(
        PagesTableSize(tamp)
      )
    );
    setProcessesArray(StartProcessesArray());
  }

  function handleAddNewProcess(newProcessSize : number){
    if(VerifyAmmountPageProcess(1849, pageSize) <= VerifyAvailablePages(tablePageConfig)){
      AddNewProcess(pageSize, newProcessSize, processesArray, tablePageConfig);
    } else {
      alert("Memória disponível insuficiente para alocação do processo!");
    }
  }

  return (
    <div className="App" style={{backgroundColor: "#333333", minHeight: "100vh"}}>
      <HeaderContainer>
        <HeaderSmallForm>
          <strong>1º</strong>
          <HeaderInput placeholder="Insira o tamanho da página em bytes" value={pageSize} onChange={(e: { target: { value: any; }; }) => {setPageSize(Number(e.target.value))}} />
          <HeaderOption onClick={() => handleDefineTamp(pageSize)}>Definir tamanho da página</HeaderOption>
        </HeaderSmallForm>
        <HeaderSmallForm>
          <strong>2º</strong>
          <HeaderInput type="number" placeholder="Tamanho do processo (bytes)" />
          <HeaderOption onClick={(e) => {}}>Adicionar Processo</HeaderOption>
        </HeaderSmallForm>
        <HeaderSmallForm>
          <strong>3º</strong>
          <HeaderInput type="number" placeholder="PID do processo" />
          <HeaderOption onClick={() => {}}>Remover Processo</HeaderOption>
        </HeaderSmallForm>
      </HeaderContainer>

      <DashboardWrapper
        left={<PagesTable tamp={pageSize} tablePageConfig={tablePageConfig}/>}
        right={<ProcessesArray tamp={pageSize} processArray={processesArray} />}
      />
    </div>
  );
}

export default App;
