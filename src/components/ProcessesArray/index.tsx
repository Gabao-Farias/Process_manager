import React, { FC } from 'react';
import ProcessTable from '../ProcessTable';
import { ProcessArrayContainer, Title } from './styles';

interface ProcessArrayProps {
  processArray: Process[];
  tamp: number;
  choice: "dark" | "light";
}

const ProcessesArray : FC<ProcessArrayProps> = ({processArray, tamp, choice}) => {
  return(
    <ProcessArrayContainer>
      <Title choice={choice}>Processos Alocados: {processArray.length} </Title>
      {
        processArray.map((process) => {
          return <ProcessTable choice={choice} key={process.pid} process={process} tamp={tamp} />
        })
      }
    </ProcessArrayContainer>
  );
}

export default ProcessesArray;
