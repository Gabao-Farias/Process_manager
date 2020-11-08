import React, { FC } from 'react';
import { Process } from '../../Models';
import { PIDContainer, ProcessTableContainer, TableWrapper, NPF, NPL, TableRow } from './styles';

interface P {
  process: Process;
}


const ProcessTable : FC<P> = ({process}) => {
  return(
    <ProcessTableContainer>
      <PIDContainer>PID: {process.pid}</PIDContainer>
      <TableWrapper>
        <TableRow>
          <NPF><strong>NPF</strong></NPF>
          <NPL><strong>NPL</strong></NPL>
        </TableRow>
      </TableWrapper>
    </ProcessTableContainer>
  );
}

export default ProcessTable;
