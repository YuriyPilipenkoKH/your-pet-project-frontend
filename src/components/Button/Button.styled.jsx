import styled, {  keyframes } from 'styled-components';
// import { NavLink } from "react-router-dom";

export const rotate = keyframes`
   0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(7deg);
    }
    75% {
      transform: rotate(-7deg);
    }
    100% {
      transform: rotate(0deg);
    }

`



export const buttonStyles =`
    
font-family: inherit;
font-weight: 600;
height: 40px;

display: flex;
align-items: center;
justify-content: center;
gap: 8px;
border: none;
border-radius: 20px;
padding: 8px 20px ;
font-size: 16px;
cursor: pointer;
outline: none;

transition: all 0.4s ease; 

`

export const ripple=`
position: relative;
overflow: hidden;

&:after {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
  background-image: radial-gradient(circle, #5b24ff 10%, transparent 10.01%);
  background-repeat: no-repeat;
  background-position: 50%;
  transform: scale(10, 10);
  opacity: 0;
  transition: transform 0.4s, opacity 1s;
}

&:active:after {
  transform: scale(0, 0);
  opacity: 0.3;
  transition: 0s;
}

&:disabled {
  cursor: none;
  background-color: #888;

  &:hover {
    color: #eee;
  background-color: #888;
  
  }
}
`

export const hoverStylesB =`
& >svg {

  fill: var(--fone-color);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, var( --gradient-bl), var(--gradient-br));
  color: var(--fone-color);
 }

`
export const hoverStylesTrB =`
border: 2px solid var(--blue);
background-color: var(--fone-color);
color: var(--blue);

transition: all 0.4s ease; 

& >svg {
  fill: var(--blue);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, #88c7fc, #4da5f3);
  color: var(--fone-color);
  border: 2px solid transparent;

  & >svg {
    transition: all 0.4s ease; 
    fill: var(--fone-color);
}
 }

`
export const hoverStylesY =`
& >svg {

  fill: var(--fone-color);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, var( --gradient-yl), var(--gradient-yr));
  color: var(--fone-color);
 }
}
`

export const StyledButton = styled.button`


${buttonStyles} ;
 ${ripple} ;
 
 background-color: var(--blue);
 color: var(--fone-color);
 transition: all 0.4s ease; 

& >svg {

  fill: var(--fone-color);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, var( --gradient-bl), var(--gradient-br));
  color: var(--fone-color);
 }

`;

export const StyledButtonTransparent = styled.button`
${buttonStyles} ;
${ripple} ;

border: 2px solid var(--blue);
background-color: var(--fone-color);
color: var(--blue);
transition: all 0.4s ease; 

& >svg {
  fill: var(--blue);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, #88c7fc, #4da5f3);
  color: var(--fone-color);
  border: 2px solid transparent;

  & >svg {
    transition: all 0.4s ease; 
    fill: var(--fone-color);
}
 }

`;

export const StyledLogButton = styled.button`

${buttonStyles} ;
 ${ripple} ;
 
 background-color: var(--yellow);
 color: var(--fone-color);
 width: 165px;
 
 ${hoverStylesY} ;
`;

export const StyledRegButton = styled.button`
${buttonStyles} 
 ${ripple} 

border: 2px solid var(--yellow);
background-color: var(--fone-color);
color: var(--yellow);
width: 165px;
transition: all 0.4s ease; 

${hoverStylesY} ;

  /* &:hover  {
  border: 2px solid transparent;
 } */

`;

export const StyledOutButton = styled.button`
${buttonStyles} 
${ripple} 

border: 2px solid var(--blue);
background-color: var(--blue);
color: var(--fone-color);
width: 135px;

${hoverStylesB} 

 &:hover  {
  border: 2px solid transparent;
 }
 & >svg {
width: 24px;
transform: rotate(180deg);
}


`;

export const StyledFilterButton = styled.button`
${buttonStyles} 
${ripple} 
${hoverStylesTrB} 

width: 152px;
`;

export const StyleAddToButton = styled.button`
${buttonStyles} ;
${ripple} ;

border: 2px solid var(--blue);
background-color: var(--blue);
color: var(--fone-color);
width: 130px;

${hoverStylesB} ;

&:hover  {
  border: 2px solid transparent;
}
`;

export const StyledContactButton = styled.button`

${buttonStyles} ;
${ripple} ;
${hoverStylesTrB} ;

width: 152px;
`;

export const StyledLearnButton = styled.button`

${buttonStyles} 
${ripple} 
${hoverStylesTrB} 

width: 152px;
`;





export const StyledRadioButton = styled.button`
${buttonStyles} 
 ${ripple} 

 border: 2px solid var(--yellow);
background-color: var(--fone-color);
color: var(--yellow);
width: 165px;
transition: all 0.4s ease; 

& >svg {

  fill: var(--yellow);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, var( --gradient-yl), var(--gradient-yr));
  color: var(--fone-color);
  border: 2px solid transparent;

  & >svg {
    transition: all 0.4s ease; 
    fill: var(--fone-color);
}
 }

`;







// export const StyledLink = styled(NavLink)`


//   transition:  color 1s ease-in-out;

//   font-weight: 600;
//   transition: 0.3s ease;



//   &.active {
//     color: #eee;
//     background-color: var(--green);

//   }
// `;

export const StyledLogo = styled.button`
border: none;
outline: none;
background-color: transparent;
padding: 12px 0;

&>:hover {
  animation-duration: 0.1s;
  animation: ${rotate} 1s ease;   
  cursor: pointer;

}


`