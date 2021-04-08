/* eslint-disable no-bitwise */
import React, { FC, useContext } from 'react';
import { ThemeChoice } from '../../contexts';
import { InternFragment, InternFragmentPercentage } from '../../utils';
import {
  ProcessTableContainer,
  TableWrapper,
  ItemRow,
  TableRow,
  SmallHeader,
  SmallHeaderDetails
} from './styles';

interface ProcessTableProps {
  process: Process;
  tamp: number;
}

const ProcessTable: FC<ProcessTableProps> = ({ process, tamp }) => {
  const { choice } = useContext(ThemeChoice);
  let npl = -1;

  return (
    <ProcessTableContainer choice={choice}>
      <SmallHeader choice={choice} key="processHeader">
        <h3>PID: {process.pid}</h3>
        <SmallHeaderDetails choice={choice}>
          Tamanho processo
          <br />
          {process.processSize} Bytes
        </SmallHeaderDetails>
        <SmallHeaderDetails choice={choice}>
          Páginas ocupadas
          <br />
          {process.busyPages}
        </SmallHeaderDetails>
        <SmallHeaderDetails choice={choice}>
          Fragmentação interna
          <br />
          {InternFragment(tamp, process.busyPages, process.processSize)} Bytes |{' '}
          {InternFragmentPercentage(
            tamp,
            process.busyPages,
            process.processSize
          )}{' '}
          %
        </SmallHeaderDetails>
      </SmallHeader>
      <TableWrapper>
        <TableRow>
          <ItemRow choice={choice}>
            <strong>NPF</strong>
          </ItemRow>
          <ItemRow choice={choice}>
            <strong>NPL</strong>
          </ItemRow>
        </TableRow>
        {process.npfRefs.map((item) => {
          npl += 1;
          return (
            <TableRow key={npl}>
              <ItemRow choice={choice}>{item}</ItemRow>
              <ItemRow choice={choice}>{(npl >>> 0).toString(2)}</ItemRow>
            </TableRow>
          );
        })}
      </TableWrapper>
    </ProcessTableContainer>
  );
};

export default ProcessTable;
