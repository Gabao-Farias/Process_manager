import React, { FC } from 'react';
import { ProcessArray } from "../../Models";
import ProcessTable from '../ProcessTable';
import { ProcessArrayContainer } from './styles';

interface ProcessArrayProps {
  processArray: ProcessArray;
  tamp: number;
}

const ProcessesArray : FC<ProcessArrayProps> = ({processArray : {processArray}, tamp}) => {
  return(
    <ProcessArrayContainer>
      <h1 style={{textAlign: "center"}}>Processos Alocados: {processArray.length} </h1>
      {
        processArray.map((process) => {
          return <ProcessTable key={process.pid} process={process} tamp={tamp} />
        })
      }
    </ProcessArrayContainer>
  );
}

export default ProcessesArray;
