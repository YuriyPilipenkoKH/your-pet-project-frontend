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
  height: 120px;
  border-radius: 20px;
  background-color: var(--white);
  padding:  8px;
  z-index: 10;
  box-shadow: var(--shadow-default);
  cursor: pointer;


  @media screen and (min-width: 768px) {
   left: 0;
};

&>h3 {
  color: var(--blue);
}

`
export const FiltersBtn = styled.div`
  width: 136px;
  height: 32px;
  border-radius: 16px;
  background-color: var(--light-blue);
  padding:0 16px;
  font-size: 12px;
  color: var(--blue);
  display: flex;
  align-items: center;
  gap: 16px;

  &>svg{
  width: 12px;
  fill: var(--blue);
  }

`



