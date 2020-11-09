import React, { FC } from 'react';
import { PageTable } from '../../Models';
import { PagesTableContainer, ItemRow, PageNumber, NPF, Used, MemoryAvailable, InternFragment, SmallHeader } from './styles';

interface PagesTableProps {
  tablePageConfig: PageTable[];
}

const PagesTable : FC<PagesTableProps> = ({tablePageConfig}) => {
  return(
    <PagesTableContainer>
      <SmallHeader>
        <h3>Tabela de Página de SO</h3>
        <MemoryAvailable>Memória disponível: {} Bytes | {} %</MemoryAvailable>
        <InternFragment>Fragmentação interna: {} Bytes | {} %</InternFragment>
      </SmallHeader>

      <ItemRow>
        <PageNumber><strong>NP</strong></PageNumber>
        <NPF><strong>NPF</strong></NPF>
        <Used used={false}><strong>BP</strong></Used>
      </ItemRow>
      {
        tablePageConfig.map((item) => {
          return(
            <ItemRow>
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
