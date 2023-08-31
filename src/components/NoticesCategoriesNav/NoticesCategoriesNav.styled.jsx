import styled from 'styled-components';


  export const BtnWrap = styled.div`
   
   display:flex;
    flex-wrap: wrap;
    justify-content: flex-start;

    max-width: 210px;
    gap: 8px;
    
    @media screen and (min-width: 768px) {

   max-width: 350px;
};
    @media screen and (min-width: 1280px) {

   max-width: 600px;
};
  
  &>button.active {
   
    background-color: var(--blue);
    color: var(--white);
 
  }
`;

