import isPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';

export const FilterWrapper = styled.div`
   display: flex;
   align-items: baseline;
   margin-left:auto;
   gap:12px;
   position: relative;
 
  @media screen and (min-width: 768px) {
   
  };
  
  @media screen and (min-width: 1280px) {
   
  }

  &>.FilterBtn{
    display:none;  
    
    @media screen and (min-width: 768px) {
   display:flex;
};
  }


  &>.filround{
    display:flex;  
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 768px) {
   display:none;
};

  } 
`;

export const DropdownMenu = styled.div`
  /* outline: 1px solid crimson; */
  position: absolute;
  top: 50px;
  right: 5%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 152px;
  /* height: 120px; */
  border-radius: 20px;
  background-color: var(--white);
  padding:  8px;
  z-index: 10;
  box-shadow: var(--shadow-default);
  


  @media screen and (min-width: 768px) {
   left: 0;
};

&>h3 {
  color: var(--blue);
}

`
export const FiltersBtn1 = styled.div.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) && prop !== 'bor' ,
})`
  width: 136px;
  height: 32px;
  border-radius: ${({ bor }) => bor ? '16px 16px 0 0' : '16px'};
  background-color: var(--light-blue);
  padding:0 16px;
  font-size: 12px;
  color: var(--blue);
  
  &>span{
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
  }

  &>span>svg{
  width: 18px;
  fill: var(--blue);
  opacity: ${({ bor }) => bor ? '0' : '1' };
  }

`
export const FiltersBtn2 = styled.div.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) && prop !== 'bor' ,
})`
  width: 136px;
  height: 32px;
  border-radius: ${({ bor }) => bor ? '16px 16px 0 0' : '16px'};
  background-color: var(--light-blue);
  padding:0 16px;
  font-size: 12px;
  color: var(--blue);
  
  &>span{
    width: 100%;
    height: 32px;
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
  }

  &>span>svg{
  width: 18px;
  fill: var(--blue);
  opacity: ${({ bor }) => bor ? '0' : '1' };
  }

`


export const CheckList1 = styled.div.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) && prop !== 'bor' ,
})`
  width: 136px;
  height: 100px;
  padding: 8px;
  display: grid;
  gap: 5px;
  background-color: var(--light-blue);
  border-radius: ${({ bor }) => !bor ? ' 0 0 16px 16px' : '16px'};


`
export const CheckList2 = styled.div.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) && prop !== 'bor' ,
})`
  width: 136px;
  height: 70px;
  padding: 8px;
  display: grid;
  gap: 5px;
  background-color: var(--light-blue);
  border-radius: ${({ bor }) => !bor ? ' 0 0 16px 16px' : '16px'};


`

export const RadioInput = styled.input`
opacity: 0;
padding: 2px 8px;
`
export const RadioLabel = styled.label`
position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  color: var(--blue);
  font-size: 12px;

&>svg {
  position: absolute;
  left: 5px;
  width: 16px;
  fill: var(--blue);
  
}
`



