import React, { FC } from 'react';
import { PageTable } from '../../Models';
import { PagesTableContainer, ItemRow, PageNumber, NPF, Used } from './styles';

interface PagesTableProps {
  tablePageConfig: PageTable[];
}

const PagesTable : FC<PagesTableProps> = ({tablePageConfig}) => {
  return(
    <PagesTableContainer>
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
