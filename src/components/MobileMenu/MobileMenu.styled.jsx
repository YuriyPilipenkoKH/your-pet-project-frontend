import styled from 'styled-components';

export const MenuWrapp = styled.div`

  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: -100%;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  z-index: 2;
  background-color: var(--fone-color);
  transition: left 1s;
  padding: 25px;

  &.active {
    left: 0;
  }

`
export const MenuHeader = styled.div`
    position: relative;
    width: 320px;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-self: center ;

`

export const MenuContent = styled.div`
    display: grid;
    place-items: center;
    padding: 40px;
    gap: 40px;

    &>.AuthNav{
        display: grid;
        gap: 12px;
        justify-self: center;
        align-items: center;
      
    }

    &>.NavWrap{
        display: grid;
        gap: 20px;
        place-items: center;
   
        &>a{
            font-size: 32px;
            font-weight: 500;

            &:hover{
                color: var(--yellow);
                font-weight: 700px;
            }
        }
    }

`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  

  &>svg{
    color:#222;
    scale: 2;

    &:hover {
        color: var(--yellow);
    }

  }

`

