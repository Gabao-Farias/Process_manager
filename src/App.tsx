import React, { useState } from 'react';
import { DashboardWrapper, PagesTable, ProcessTable } from './components';
import { HeaderContainer, HeaderOption, HeaderSmallForm, HeaderInput } from './styles';
import PagesTableGenerator from './utils/PagesTableGenerator';

function App() {
  const [tamp, setTamp] = useState(16);
  const [tablePageConfig, setTablePageConfig] = useState(PagesTableGenerator(16));

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
          <HeaderInput value={tamp} onChange={(e: { target: { value: any; }; }) => {setTamp(Number(e.target.value))}} placeholder="Insira o tamanho da página em Bytes" />
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
        right={
          <ProcessTable process={{
            pid: "28252",
            processSize: 256,
            busyPages: 2,
            fragmentSize: 50
            }
          }/>
        }
      />
    </div>
  );
}

export default App;
