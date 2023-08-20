import styled from 'styled-components';

export const MenuWrapp = styled.div`

    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
   
     z-index: 2;
    background-color: var(--fone-color);
    padding: 48px 40px;
     font-size: 20px;
     height: 100vh;
     width: 100vw;
     transform: translateX(100%);
     transition: all 1s ease;

     &.is-open {
        display: flex;
        opacity: 1;
        flex-direction: column;
        justify-content: space-between;
        gap: 20px;
        transform: translateX(0%);
        transition: all 1s ease;
       }    

    
`