import styled from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

export const ModalOverlay = styled.div`

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #0000007f;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 7;
  opacity: 0;
  visibility: hidden;
  transition: opacity 1s, visibility 0s 1s; 


  
&.modal.active {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.3s;
}
`;

export const ModalContainer = styled.div.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) &&
      prop !== 'heightm' &&
      prop !== 'heightd',
})`

  width: 280px;
  /* height: ${props => props.heightm} ; */
  height: ${({ heightm }) => heightm && '445px'};
  position: relative;
  display: grid;
  place-items: center;
  gap: 20px;  
  background-color: var(--white);
  padding: 50px 20px;
  border-radius: 20px;
  z-index: 50;


  @media screen and (min-width: 768px) {
    width: 608px;
   
    /* height: ${props => props.heightd} ; */
    height: ${({ heightd}) => heightd && '429px'};
    padding: 50px 40px;
    border-radius: 40px;
  }
`;

export const ModalContainer3 = styled.div`
  position: relative;
  width: 280px;
  height: 760px;
  position: relative;
  display: grid;
  place-items: center;
  gap: 20px;  
  background-color: var(--white);
  padding:40px 20px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;


  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 683px;
    height: 540px;
    padding: 32px;
    border-radius: 40px;
    place-items: start;
  }
`;

export const BtnContainer = styled.div.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) &&
      prop !== 'btnsizem' &&
      prop !== 'btnsized' &&
      prop !== 'type' 
})`
   
    display: flex;
    flex-direction: column;
    gap: 12px;

    &>button, &>a {
        /* width: ${props => props.btnsizem}; */
        width: ${({ btnsizem}) => btnsizem && '240px'};
    }
    


    @media screen and (min-width: 768px) {

      flex-direction: row;
      
      gap: 22px;

        &>button, &>a {

        /* width: ${props => props.btnsized}; */
        width: ${({ btnsized }) => btnsized && '165px'};
        gap:  ${(props => props.type === 4) ? '20px' : '12px'};
    }
  }
`;

export const BtnContainer3 = styled.div`
   
    display: flex;
    flex-direction: column;
    gap: 12px;

  

    @media screen and (min-width: 768px) {
      position: absolute;
      bottom: 22px;
      right: 32px;
      flex-direction: row-reverse;
      gap: 22px;

        &>button,  &>a {
        width: var(--btwidth);
    }
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  font-weight: 500;
  margin: 0;
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 36px;
  }
`;

export const ModalTitle3 = styled.h2`
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  margin: 0;
  width: 210px;

  @media screen and (min-width: 768px) {
    font-size: 28px;
    width: 260px;
    font-weight: 700;
  }
`;

export const ModalCategory = styled.div`
  width: 126px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 20px;
  top: 55px;
  font-size: 14px;
  font-weight: 600;
  padding: 11px;
  background-color: var(--light-blue);
  border-radius: 0 16px 16px 0;

  @media screen and (min-width: 768px) {
    left: 32px;
  }
`;

export const ModalText = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin: 0;
  padding-bottom: 20px;
  border: none;

  @media screen and (min-width: 768px) {
    font-size: 20px;

  }
`;

export const ModalImage = styled.img`
  /* max-width: 100%;
  height: auto; */
  width:240px;
  height: 240px;
  border-radius: 0px 0px 40px 40px;

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 300px;

  }
  
`;

export const ContentWrapp = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ModalButton = styled.button.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) &&
      prop !== 'buttonColor' 
})`

  /* background-color: ${props => props.buttonColor}; */
  background-color: ${({ buttonColor }) => buttonColor && '#13d'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

export const OnCloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  background-color: transparent;
  border: none;
  cursor: pointer;

  &>svg{
    color:#222;
    scale: 2;

    &:hover {
        color: var(--blue);
    }

  }
  @media screen and (min-width: 768px) {
    top: 24px;
    right: 20px;
    
  } 
   `;

// type === 3
export const PetList = styled.div`
  display: grid;
  grid-template-columns: 80px 60%;
  grid-template-rows: repeat(8, 20px);
  grid-column-gap: 18px;
  grid-row-gap : 4px;

  font-size: 12px;
  font-weight: 500;

&>p {
  font-size: 14px;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
} 
}
&>span,  &>p{
       overflow: hidden;
        text-overflow: ellipsis; 
        white-space: nowrap; 
}

& > p:last-child {
  
    font-size: 14px; 
    grid-column: span 2;
    
    @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 600;
    position: absolute;
    top: 360px;
    left: 40px;
    width: 600px;
} 

  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    grid-row-gap : 10px;
} 
`