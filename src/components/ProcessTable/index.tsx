import React, { FC } from 'react';
import { InternFragment, InternFragmentPercentage } from '../../utils';
import { ProcessTableContainer, TableWrapper, NPF, NPL, TableRow, SmallHeader, SmallHeaderDetails } from './styles';

interface ProcessTableProps {
  process: Process;
  tamp: number
}


const ProcessTable : FC<ProcessTableProps> = ({process, tamp}) => {
  var npl = -1;

  return(
    <ProcessTableContainer>
      <SmallHeader key="processHeader">
        <h3>PID: {process.pid}</h3>
        <SmallHeaderDetails>Tamanho processo: {process.processSize}</SmallHeaderDetails>
        <SmallHeaderDetails>Páginas ocupadas: {process.busyPages}</SmallHeaderDetails>
        <SmallHeaderDetails>Fragmentação interna: {
            InternFragment(tamp, process.busyPages, process.processSize)
          } Bytes | {
            InternFragmentPercentage(tamp, process.busyPages, process.processSize)
          } %</SmallHeaderDetails>
      </SmallHeader>
      <TableWrapper>
        <TableRow>
          <NPF><strong>NPF</strong></NPF>
          <NPL><strong>NPL</strong></NPL>
        </TableRow>
        {
          process.npfRefs.map((item) => {
            npl++;
            return(
              <TableRow key={npl}>
                <NPF>{item}</NPF>
                <NPL>{(npl >>> 0).toString(2)}</NPL>
              </TableRow>
            )
          })
        }
      </TableWrapper>
    </ProcessTableContainer>
  );
}

export default ProcessTable;
