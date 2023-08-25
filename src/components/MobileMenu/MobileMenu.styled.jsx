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
  z-index: 22;
  background-color: var(--fone-color);
  transition: left 1s;
  padding: 25px;

  &.active {
    left: 0;
  }

  @media screen and (min-width: 1280px) {
    display: none;
  }

`
export const MenuHeader = styled.div`
    position: relative;
    
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-self: center ;

    @media screen and (min-width: 768px) {
        width: 768px;
    }

`

export const MenuContent = styled.div`
    display: grid;
    place-items: center;
    grid-template-rows: 100px 200px ;
    padding: 40px;
    gap: 40px;

@media screen and (max-width: 319px) {
                padding: 40px 4px;
            }


    &>.AuthNav,
    &>.UserNav{
        display: flex;
        flex-direction: column;
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
            @media screen and (max-width: 319px) {
                font-size: calc(0.7vw + 1.2rem );
            }

            @media screen and (min-width: 768px) {
                font-size: 48px;
            }

        }
    }

    @media screen and (min-width: 768px) {
        grid-template-rows: 300px 100px ;

    &>.AuthNav,
    &>.UserNav{
        position: absolute;
        top: 25px;
        left: 48%;
        display: flex;
        flex-direction: row;
    }

    &>.UserNav>.useravatar{
        @media screen and (min-width: 768px) {
            display: none;
        }
    }
    /* &>.UserNav>.logout{
        @media screen and (min-width: 768px) {
            position: absolute;
            top: 4px;
            left: 200px;
        }
    } */
    
  } 
     &>.logout{
        position: absolute;
        bottom: 20px;
        right: 50%;
        @media screen and (min-width: 768px) {
            top: 25px;
            left: 64%;
        }

     }

     &>.useravatar {
        @media screen and (min-width: 768px) {
            display: none;
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

