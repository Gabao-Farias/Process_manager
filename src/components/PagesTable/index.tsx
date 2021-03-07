import React, { FC } from 'react';
import {
  InternFragmentPageTable,
  InternFragmentPageTablePercentage,
  PagesSize,
  VerifyAvailableMemory,
  VerifyAvailableMemoryPercentage
} from '../../utils';
import {
  PagesTableContainer,
  ItemRow,
  SimpleRow,
  Used,
  HeaderItem,
  SmallHeader
} from './styles';

interface PagesTableProps {
  tablePageConfig: PageTable[];
  tamp: number;
  processArray: Process[];
  choice: 'dark' | 'light';
}

const PagesTable: FC<PagesTableProps> = ({
  tablePageConfig,
  tamp,
  processArray,
  choice
}) => {
  return (
    <PagesTableContainer choice={choice}>
      <SmallHeader choice={choice}>
        <h3>Tabela de Página de SO</h3>
        <HeaderItem choice={choice}>
          Memória disponível
          <br></br>
          {VerifyAvailableMemory(tablePageConfig, tamp)} Bytes |{' '}
          {Math.round(VerifyAvailableMemoryPercentage(tablePageConfig))}%
        </HeaderItem>
        <HeaderItem choice={choice}>
          Fragmentação interna
          <br></br>
          {InternFragmentPageTable(processArray, tamp)} Bytes |{' '}
          {Math.round(InternFragmentPageTablePercentage(processArray, tamp))}%
        </HeaderItem>
        <HeaderItem choice={choice}>
          Nº de Páginas Físicas
          <br></br>
          {PagesSize(tamp)} bits
        </HeaderItem>
      </SmallHeader>

      <ItemRow key={'header'}>
        <SimpleRow choice={choice}>
          <strong>Index</strong>
        </SimpleRow>
        <SimpleRow choice={choice}>
          <strong>NPF</strong>
        </SimpleRow>
        <Used choice={choice} used={false}>
          <strong>BP</strong>
        </Used>
      </ItemRow>
      {tablePageConfig.map((item) => {
        return (
          <ItemRow key={item.pageNumber}>
            <SimpleRow choice={choice}>{item.pageNumber}</SimpleRow>
            <SimpleRow choice={choice}>{item.npf}</SimpleRow>
            <Used choice={choice} used={item.used}>
              {item.used ? 1 : 0}
            </Used>
          </ItemRow>
        );
      })}
    </PagesTableContainer>
  );
};

export default PagesTable;
