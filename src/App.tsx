import React, { useState } from 'react';
import Switch from 'react-switch';
import { ThemeProvider } from 'styled-components';
import { DashboardWrapper, PagesTable, ProcessesArray } from './components';
import {
  HeaderContainer,
  HeaderOption,
  HeaderSmallForm,
  HeaderInput,
  Wrapper,
  Select,
  Option
} from './styles';
import {
  AddNewProcess,
  AddNewProcessPageTableConfig,
  DestroyProcess,
  DestroyProcessPageTable,
  GetNewProcessOnly,
  PagesTableSize,
  PagesTableGenerator,
  ProcessExists,
  StartProcessesArray,
  VerifyAmmountPageProcess,
  VerifyAvailablePages,
  ColorsTheme
} from './utils';

const App: React.FC = () => {
  const [themeSwitch, setThemeSwtich] = useState(false);
  const [colorTheme, setColorTheme] = useState<ThemeChoice>({
    choice: 'light'
  });
  const [lastPIDAdded, setLastPIDAdded] = useState(0);
  const [pidInput, setPidInput] = useState('');
  const [pageSize, setPageSize] = useState(1024);
  const [processSize, setProcessSize] = useState(0);
  const [tablePageConfig, setTablePageConfig] = useState(
    PagesTableGenerator(8)
  );
  const [processesArray, setProcessesArray] = useState(StartProcessesArray());

  function handleColorThemeChange() {
    setThemeSwtich(!themeSwitch);
    if (themeSwitch) {
      setColorTheme({ choice: 'light' });
      return;
    }
    setColorTheme({ choice: 'dark' });
  }

  function handleDefinePageSize(tamp: number) {
    setPageSize(tamp);
    setTablePageConfig(PagesTableGenerator(PagesTableSize(tamp)));
    setProcessesArray(StartProcessesArray());
  }

  function handleAddNewProcess(newProcessSize: number) {
    if (
      VerifyAmmountPageProcess(newProcessSize, pageSize) <=
      VerifyAvailablePages(tablePageConfig)
    ) {
      setLastPIDAdded(lastPIDAdded + 1);
      setProcessesArray(
        AddNewProcess(
          pageSize,
          newProcessSize,
          processesArray,
          lastPIDAdded,
          tablePageConfig
        )
      );
      setTablePageConfig(
        AddNewProcessPageTableConfig(
          tablePageConfig,
          GetNewProcessOnly(
            pageSize,
            newProcessSize,
            lastPIDAdded,
            tablePageConfig
          )
        )
      );
    }
  }

  function handleDestroyProcess(PID: string) {
    if (ProcessExists(PID, processesArray)) {
      setTablePageConfig(
        DestroyProcessPageTable(PID, processesArray, tablePageConfig)
      );
      setProcessesArray(DestroyProcess(PID, processesArray));
    }
  }

  return (
    <div className="App">
      <ThemeProvider theme={ColorsTheme[colorTheme.choice]}>
        <Wrapper choice={colorTheme.choice}>
          <HeaderContainer choice={colorTheme.choice}>
            <Switch
              checkedIcon={false}
              uncheckedIcon={false}
              checked={themeSwitch}
              onChange={() => handleColorThemeChange()}
            />
            <HeaderSmallForm choice={colorTheme.choice}>
              <Select
                value={pageSize}
                onChange={({ target }) =>
                  handleDefinePageSize(Number(target.value))
                }
              >
                <Option value={8192}>8192 bytes</Option>
                <Option value={4096}>4096 bytes</Option>
                <Option value={2048}>2048 bytes</Option>
                <Option value={1024}>1024 bytes</Option>
                <Option value={512}>512 bytes</Option>
                <Option value={256}>256 bytes</Option>
                <Option value={128}>128 bytes</Option>
                <Option value={64}>64 bytes</Option>
              </Select>
            </HeaderSmallForm>
            <HeaderSmallForm choice={colorTheme.choice}>
              <HeaderInput
                value={processSize}
                onChange={(e) => {
                  setProcessSize(Number(e.target.value));
                }}
                placeholder="Tamanho do processo (bytes)"
              />
              <HeaderOption
                onClick={() => {
                  handleAddNewProcess(processSize);
                }}
              >
                Adicionar Processo
              </HeaderOption>
            </HeaderSmallForm>
            <HeaderSmallForm choice={colorTheme.choice}>
              <HeaderInput
                value={pidInput}
                onChange={(e) => {
                  setPidInput(e.target.value);
                }}
                placeholder="PID do processo"
              />
              <HeaderOption
                onClick={() => {
                  handleDestroyProcess(pidInput);
                }}
              >
                Remover Processo
              </HeaderOption>
            </HeaderSmallForm>
          </HeaderContainer>

          <DashboardWrapper
            leftChildren={
              <PagesTable
                tamp={pageSize}
                tablePageConfig={tablePageConfig}
                processArray={processesArray}
              />
            }
            rightChildren={
              <ProcessesArray tamp={pageSize} processArray={processesArray} />
            }
          />
        </Wrapper>
      </ThemeProvider>
    </div>
  );
};

export default App;
