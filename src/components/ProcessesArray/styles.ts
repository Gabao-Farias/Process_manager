import styled from 'styled-components';
import {ColorsTheme} from '../../utils';

export const ProcessArrayContainer = styled.div<ThemeChoice>`
  display: flex;
  flex: 1;
  flex-direction: column;
  border: ${({choice}) => ColorsTheme[choice]?.environment.lighter} solid 1px;
  border-radius: 20px;
  padding: 10px 20px;
`;

export const Title = styled.h1<ThemeChoice>`
  color: ${({choice}) => ColorsTheme[choice]?.text.main};
  background-color: ${({choice}) => ColorsTheme[choice]?.environment.lighter};
  border-radius: 10px;
  padding: 10px 20px;
  text-align: center;
  transition: 0.4s;
`;
