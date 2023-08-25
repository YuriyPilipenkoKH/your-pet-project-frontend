import styled from 'styled-components';


export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top:40px;
  gap: 24px;
`;

export const SearchContainer = styled.div`
  position: relative;
`;

export const TytleNwes = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 32.78px;
  text-align: center;
  color: #000000;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    line-height: 65.57px;
  }
`;

export const SearchIcon = styled.span`
  position: absolute;
  top: 55%;
  right: 10px;
  transform: translateY(-50%);
  
  fill: var(--blue);
`;
export const SearchInput = styled.input`
  width: 280px;
  height: 44px;
  font-size: 16px;
  padding-left: 20px;
  border: 1px solid var(--blue);
  border-radius:50px;
  
  color: var(--grey);
  &::placeholder {
    font-size: 14px;
    line-height: 16.94px;
    
  }
    &:focus {
    outline: 1px solid var(--blue);
  }

  @media screen and (min-width: 768px) {
    width: 608px;
    font-size: 18px;
    &::placeholder {
    font-size: 20px;
    line-height: 24.2px;
    
  }
  }
`;