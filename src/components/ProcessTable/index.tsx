import React, { FC } from 'react';
import { InternFragment, InternFragmentPercentage } from '../../utils';
import { ProcessTableContainer, TableWrapper, ItemRow, TableRow, SmallHeader, SmallHeaderDetails } from './styles';

interface ProcessTableProps {
  process: Process;
  tamp: number;
  choice: "dark" | "light";
}


const ProcessTable : FC<ProcessTableProps> = ({process, tamp, choice}) => {
  var npl = -1;

  return(
    <ProcessTableContainer choice={choice}>
      <SmallHeader choice={choice} key="processHeader">
        <h3>PID: {process.pid}</h3>
        <SmallHeaderDetails choice={choice}>Tamanho processo<br></br>{process.processSize}</SmallHeaderDetails>
        <SmallHeaderDetails choice={choice}>Páginas ocupadas<br></br>{process.busyPages}</SmallHeaderDetails>
        <SmallHeaderDetails choice={choice}>Fragmentação interna<br></br>{
            InternFragment(tamp, process.busyPages, process.processSize)
          } Bytes | {
            InternFragmentPercentage(tamp, process.busyPages, process.processSize)
          } %</SmallHeaderDetails>
      </SmallHeader>
      <TableWrapper>
        <TableRow>
          <ItemRow choice={choice}><strong>NPF</strong></ItemRow>
          <ItemRow choice={choice}><strong>NPL</strong></ItemRow>
        </TableRow>
        {
          process.npfRefs.map((item) => {
            npl++;
            return(
              <TableRow key={npl}>
                <ItemRow choice={choice}>{item}</ItemRow>
                <ItemRow choice={choice}>{(npl >>> 0).toString(2)}</ItemRow>
              </TableRow>
            )
          })
        }
      </TableWrapper>
    </ProcessTableContainer>
  );
}

export default ProcessTable;
