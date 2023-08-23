import styled from 'styled-components';

export const FilterWrapper = styled.div`
   display: flex;
            align-items: baseline;
            margin-left:auto;
            gap:12px;
 
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

