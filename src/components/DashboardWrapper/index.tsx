import React, { FC } from 'react';
import { DashboardWrapperContainer, Left, Right } from './styles';

interface DashboardWrapperProps {
  leftChildren: React.ReactNode;
  rightChildren: React.ReactNode;
}

const DashboardWrapper: FC<DashboardWrapperProps> = ({
  leftChildren,
  rightChildren
}) => {
  return (
    <DashboardWrapperContainer>
      <Left>{leftChildren}</Left>
      <Right>{rightChildren}</Right>
    </DashboardWrapperContainer>
  );
};

export default DashboardWrapper;
