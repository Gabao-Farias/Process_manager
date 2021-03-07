import styled from 'styled-components';

export const DashboardWrapperContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
`;
