import styled, { keyframes } from 'styled-components';
import { ReactComponent as Spinner } from '../../images/react.svg';


const rotate = keyframes`
   0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }

`

export const StyledSpinner = styled(Spinner)`
    
    animation:${rotate} 2s linear infinite;
`

export const Wrap= styled.div`
   position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10;
`