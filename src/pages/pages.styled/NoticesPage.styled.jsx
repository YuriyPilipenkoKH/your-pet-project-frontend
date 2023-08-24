import styled from 'styled-components';

export const NavWrapper = styled.div`
   display:flex;
    /* flex-wrap: wrap; */
    /* justify-content: flex-start; */
    /* margin-left: auto; */
    /* max-width: 210px; */
    gap: 8px;
 
  @media screen and (min-width: 768px) {
    gap: 12px;
  };
  
  @media screen and (min-width: 1280px) {
   
  }
`;

export const NavWrap = styled.div`
 display:none;
    margin-top: 8px;
    margin-bottom: 24px;
     gap: 8px;

  
 @media screen and (min-width: 768px) {
   
  };
  
  @media screen and (min-width: 1280px) {
   
  }
`;

export const NoticesPageWrap = styled.div`
padding:0 20px;
display: flex;

  
 @media screen and (min-width: 768px) {
    display:flex;
    align-items: baseline
  };
  
  @media screen and (min-width: 1280px) {
   margin-top:40px;

  }
`;

export const NoticeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 32px;

`