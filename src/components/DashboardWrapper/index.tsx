import React, { FC } from 'react';
import { DashboardWrapperContainer, Left, Right } from './styles';

interface Children {
  left: React.ReactNode;
  right: React.ReactNode;
}

const DashboardWrapper : FC<Children> = ({left, right}) => {
  return(
    <DashboardWrapperContainer>
      <Left>{left}</Left>
      <Right>{right}</Right>
    </DashboardWrapperContainer>
  );
}

export default DashboardWrapper;
