import React, { FC } from 'react';
import { Process } from '../../Models';
import { ProcessTableContainer } from './styles';

interface P {
  process: Process;
}


const ProcessTable : FC<P> = (processParam) => {
  return(
    <ProcessTableContainer>
      Container nhaa
    </ProcessTableContainer>
  );
}

export default ProcessTable;
