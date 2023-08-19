import styled from 'styled-components';

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
`;

export const ModalContainer = styled.div`
  width: 280px;
  /* height: 445px; */
  position: relative;
  display: grid;
  place-items: center;
  gap: 20px;  
  background-color: var(--white);
  padding: 50px 20px;
  border-radius: 20px;
  /* width: ${props => props.width};
  height: ${props => props.height}; */

  @media screen and (min-width: 768px) {
    width: 608px;
    height: 429px;
    padding: 50px 40px;
    border-radius: 40px;
  }
`;

export const ModalContainer3 = styled.div`
  position: relative;
  width: 280px;
  height: 800px;
  position: relative;
  /* display: grid; */
  place-items: center;
  gap: 20px;  
  background-color: var(--white);
  padding:40px 20px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  /* width: ${props => props.width};
  height: ${props => props.height}; */

  @media screen and (min-width: 768px) {
    flex-direction: row;
    width: 683px;
    height: 540px;
    padding: 32px;
    border-radius: 40px;
    place-items: start;
  }
`;

export const BtnContainer = styled.div`
   
    display: flex;
    flex-direction: column;
    gap: 12px;

    &>button {
        width: 240px;
    }

    @media screen and (min-width: 768px) {
      /* position: absolute;
      bottom: 22px;
      right: 32px; */
      flex-direction: row-reverse;
      gap: 22px;

        &>button {
        width: 165px;
    }
  }
`;

export const BtnContainer3 = styled.div`
   
    display: flex;
    flex-direction: column;
    gap: 12px;

    &>button {
        width: 240px;
    }

    @media screen and (min-width: 768px) {
      position: absolute;
      bottom: 22px;
      right: 32px;
      flex-direction: row-reverse;
      gap: 22px;

        &>button {
        width: 130px;
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
  max-width: 100%;
  height: auto;

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

export const ModalButton = styled.button`
  background-color: ${props => props.buttonColor};
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
} /* Expand the field to span two columns */

  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
    grid-row-gap : 10px;
} 

`