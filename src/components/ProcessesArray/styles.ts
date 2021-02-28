import styled from 'styled-components';
import {ColorsTheme} from '../../utils';

export const ProcessArrayContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  padding: 10px;
`;

export const Title = styled.h1<ThemeChoice>`
  color: ${({choice}) => ColorsTheme[choice]?.text.main};;
  text-align: center;
  transition: 0.4s;
`;