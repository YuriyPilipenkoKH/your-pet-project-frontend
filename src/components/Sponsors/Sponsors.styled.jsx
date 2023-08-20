import styled from 'styled-components';


export const SponsorCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 280px;
  height: 239px;

  border-radius: 20px;
  background-color: var(--white);
  box-shadow: var(--shadow-default);
  transition: all 0.4s ease-in;
  &:hover {
    box-shadow: var(--shadow-hover);
  }

  /* @media screen and (min-width: 768px) {
    width: 336px;
    height: 556px;
  } */
  /* @media screen and (min-width: 1280px) {
    width: 395px;
    height: 534px;
  } */
`;

export const SponsorCardTitle = styled.a`
display: flex;
  /* font-size: 24px;
  font-weight: 600;
  text-align: left; */
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
  /* border-radius: 20px; */
  /* object-fit: cover; */

  /* @media screen and (min-width: 768px) {
    width: 100%;
    height: 252px;
  } */
`;

export const SponsorContent = styled.div`
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
// export const WrapperData = styled.div`
//   /* display: flex;
//   margin-top: auto;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center; */
// `;

// export const NewsDate = styled.p`
//   /* font-size: 16px;
//   color: #888888;
//   margin: 0; */
// `;

// export const NewsLink = styled.a`
//   /* font-size: 16px;
//   color: var(--blue);
//   text-decoration: none; */

//   /* &:hover {
//     text-decoration: underline;
//   } */
// `;
