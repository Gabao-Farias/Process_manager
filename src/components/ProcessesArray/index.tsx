import React, { FC, useContext } from 'react';
import { ThemeChoice } from '../../contexts';
import ProcessTable from '../ProcessTable';
import { ProcessArrayContainer, Title } from './styles';

interface ProcessArrayProps {
  processArray: Process[];
  tamp: number;
}

const ProcessesArray: FC<ProcessArrayProps> = ({ processArray, tamp }) => {
  const { choice } = useContext(ThemeChoice);

  return (
    <ProcessArrayContainer choice={choice}>
      <Title choice={choice}>
        Processos Alocados
        <br />
        {processArray.length}
      </Title>
      {processArray.map((process) => {
        return <ProcessTable key={process.pid} process={process} tamp={tamp} />;
      })}
    </ProcessArrayContainer>
  );
};

export default ProcessesArray;
