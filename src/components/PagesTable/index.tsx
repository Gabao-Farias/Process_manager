import React, { FC } from 'react';
import { PageTable } from '../../Models';
import { PagesSize, VerifyAvailableMemory, VerifyAvailableMemoryPercentage } from '../../utils';
import { PagesTableContainer, ItemRow, PageNumber, NPF, Used, HeaderItem, SmallHeader } from './styles';

interface PagesTableProps {
  tablePageConfig: PageTable[];
  tamp: number;
}

const PagesTable : FC<PagesTableProps> = ({tablePageConfig, tamp}) => {
  return(
    <PagesTableContainer>
      <SmallHeader>
        <h3>Tabela de Página de SO</h3>
        <HeaderItem>Memória disponível: {VerifyAvailableMemory(tablePageConfig, tamp)} Bytes | {VerifyAvailableMemoryPercentage(tablePageConfig)}%</HeaderItem>
        <HeaderItem>Fragmentação interna: {} Bytes | {} %</HeaderItem>
        <HeaderItem>Nº de Páginas Físicas: {PagesSize(tamp)} bits</HeaderItem>
      </SmallHeader>

      <ItemRow key={"header"}>
        <PageNumber><strong>Index</strong></PageNumber>
        <NPF><strong>NPF</strong></NPF>
        <Used used={false}><strong>BP</strong></Used>
      </ItemRow>
      {
        tablePageConfig.map((item) => {
          return(
            <ItemRow key={item.pageNumber}>
              <PageNumber>{item.pageNumber}</PageNumber>
              <NPF>{item.npf}</NPF>
              <Used used={item.used}>{item.used? 1 : 0}</Used>
            </ItemRow>
          )
        })
      }
    </PagesTableContainer>
  );
}

export default PagesTable;
