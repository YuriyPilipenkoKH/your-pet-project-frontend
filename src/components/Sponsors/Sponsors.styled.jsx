import styled from 'styled-components';


export const SponsorCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px;
  gap: 8px;
  width: 280px;
  height: 239px;

  border-radius: 20px;
  background-color: var(--card-color);
  box-shadow: var(--shadow-default);
  transition: all 0.4s ease-in;
  &:hover {
    box-shadow: var(--shadow-hover);
  }


`;

export const SponsorCardTitle = styled.a`
text-align: center;
  font-weight: 700;
  text-align: center; 
  color: var(--blue);
  height: 40px;
`;

export const WrapContent = styled.div`
  display: flex;
  gap: 10px;
  
`

export const ImgWrap = styled.div`
  display: flex;
  
`


export const SponsorImage = styled.img`
  width: 100px;
  height: 68px;

`;

export const SponsorContent = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
   gap: 12px;
  
`;



export const TextWrap = styled.div`

width: 125px;
max-height: 34px;
display: flex;
flex-direction: column;
overflow: hidden;
`
export const Span = styled.span`
  font-size: 12px;
`

export const SponsorText = styled.p`
  font-size: 12px;
`;


export const Date = styled.div`
width: 80px;
height: 80px;
background-color: var(--white);

`