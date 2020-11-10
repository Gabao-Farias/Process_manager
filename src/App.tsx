import React, { useState } from 'react';
import { DashboardWrapper, PagesTable, ProcessesArray } from './components';
import { HeaderContainer, HeaderOption, HeaderSmallForm, HeaderInput } from './styles';
import { AddNewProcess, AddNewProcessPageTableConfig, DestroyProcess, DestroyProcessPageTable, GetNewProcessOnly, PagesTableSize, ProcessExists, StartProcessesArray, VerifyAmmountPageProcess, VerifyAvailablePages } from './utils';
import PagesTableGenerator from './utils/PagesTableGenerator';

function App() {
  const [pidInput, setPidInput] = useState("");
  const [pageSize, setPageSize] = useState(1024);
  const [processSize, setProcessSize] = useState(0);
  const [tablePageConfig, setTablePageConfig] = useState(PagesTableGenerator(8));
  const [processesArray, setProcessesArray] = useState(StartProcessesArray());

  function handleDefinePageSize(tamp : number){
    setTablePageConfig(
      PagesTableGenerator(
        PagesTableSize(tamp)
      )
    );
    setProcessesArray(StartProcessesArray());
  }

  function handleAddNewProcess(newProcessSize : number){
    if(VerifyAmmountPageProcess(newProcessSize, pageSize) <= VerifyAvailablePages(tablePageConfig)){
      setProcessesArray(AddNewProcess(pageSize, newProcessSize, processesArray, tablePageConfig));
      console.log(processesArray);
      setTablePageConfig(AddNewProcessPageTableConfig(tablePageConfig, GetNewProcessOnly(pageSize, newProcessSize, processesArray, tablePageConfig)));
    } else {
      alert("Memória disponível insuficiente para alocação do processo!");
    }
  }

  function handleDestroyProcess(PID: string) {
    if(ProcessExists(PID, processesArray)){
      setTablePageConfig(DestroyProcessPageTable(PID, processesArray, tablePageConfig));
      setProcessesArray(DestroyProcess(PID, processesArray));
    } else {
      alert("Não existe nenhum PID correspondente nos processos alocados!");
    }
  }

  return (
    <div className="App" style={{backgroundColor: "#333333", minHeight: "100vh"}}>
      <HeaderContainer>
        <HeaderSmallForm>
          <strong>1º</strong>
          <HeaderInput
            value={pageSize}
            onChange={(e) => {setPageSize(Number(e.target.value))}}
            placeholder="Insira o tamanho da página em bytes"
          />
          <HeaderOption onClick={() => handleDefinePageSize(pageSize)}>Definir tamanho da página</HeaderOption>
        </HeaderSmallForm>
        <HeaderSmallForm>
          <strong>2º</strong>
          <HeaderInput
            value={processSize}
            onChange={(e) => {setProcessSize(Number(e.target.value))}}
            placeholder="Tamanho do processo (bytes)"
          />
          <HeaderOption onClick={() => {handleAddNewProcess(processSize)}}>Adicionar Processo</HeaderOption>
        </HeaderSmallForm>
        <HeaderSmallForm>
          <strong>3º</strong>
          <HeaderInput
            value={pidInput}
            onChange={(e) => {setPidInput(e.target.value)}}
            placeholder="PID do processo"
          />
          <HeaderOption onClick={() => {handleDestroyProcess(pidInput)}}>Remover Processo</HeaderOption>
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
