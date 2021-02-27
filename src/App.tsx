import React, { useState } from 'react';
import { DashboardWrapper, PagesTable, ProcessesArray } from './components';
import { HeaderContainer, HeaderOption, HeaderSmallForm, HeaderInput } from './styles';
import { AddNewProcess,
  AddNewProcessPageTableConfig,
  DestroyProcess,
  DestroyProcessPageTable,
  GetNewProcessOnly,
  PagesTableSize,
  PagesTableGenerator,
  ProcessExists,
  StartProcessesArray,
  VerifyAmmountPageProcess,
  VerifyAvailablePages
} from './utils';

function App() {
  const [colorTheme, setColorTheme] = useState<'dark' | 'light'>('dark');
  const [lastPIDAdded, setLastPIDAdded] = useState(0);
  const [pidInput, setPidInput] = useState("");
  const [pageSize, setPageSize] = useState(1024);
  const [pageSizeInput, setPageSizeInput] = useState(1024);
  const [processSize, setProcessSize] = useState(0);
  const [tablePageConfig, setTablePageConfig] = useState(PagesTableGenerator(8));
  const [processesArray, setProcessesArray] = useState(StartProcessesArray());

  function handleColorThemeChange(){
    if(colorTheme === 'dark') {
      setColorTheme('light');
    } else {
      setColorTheme('dark');
    }
  }

  function handleDefinePageSize(tamp : number){
    setPageSize(tamp);
    setTablePageConfig(
      PagesTableGenerator(
        PagesTableSize(tamp)
      )
    );
    setProcessesArray(StartProcessesArray());
  }

  function handleAddNewProcess(newProcessSize : number){
    if(VerifyAmmountPageProcess(newProcessSize, pageSize) <= VerifyAvailablePages(tablePageConfig)){
      setLastPIDAdded(lastPIDAdded + 1);
      setProcessesArray(AddNewProcess(pageSize, newProcessSize, processesArray, lastPIDAdded, tablePageConfig));
      console.log(processesArray);
      setTablePageConfig(AddNewProcessPageTableConfig(tablePageConfig, GetNewProcessOnly(pageSize, newProcessSize, lastPIDAdded, tablePageConfig)));
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
    <div className="App" style={{backgroundColor: "#0D1117", minHeight: "100vh"}}>
      <HeaderContainer>
        <HeaderSmallForm>
          <strong>1º</strong>
          <HeaderInput
            type="number"
            value={pageSizeInput}
            onChange={(e) => {setPageSizeInput(Number(e.target.value))}}
            placeholder="Insira o tamanho da página em bytes"
          />
          <HeaderOption onClick={() => handleDefinePageSize(pageSizeInput)}>Definir tamanho da página</HeaderOption>
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
        colorTheme={colorTheme}
        leftChildren={<PagesTable choice={colorTheme} tamp={pageSize} tablePageConfig={tablePageConfig} processArray={processesArray}/>}
        rightChildren={<ProcessesArray choice={colorTheme} tamp={pageSize} processArray={processesArray} />}
      />
    </div>
  );
}

export default App;
