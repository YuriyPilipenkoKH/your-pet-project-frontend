import styled, { keyframes } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';
import { NavLink } from "react-router-dom";


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
`;

export const buttonStyles = `

    
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

`;

export const ripple = `
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
`;

export const hoverStylesB = `
& >svg {

  fill: var(--white);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, var( --gradient-bl), var(--gradient-br));
  color: var(--white);
 }

`;
export const hoverStylesTrB = `
border: 2px solid var(--blue);
background-color: var(--white);
color: var(--blue);

transition: all 0.4s ease; 

& >svg {
  fill: var(--blue);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, #88c7fc, #4da5f3);
  color: var(--white);
  border: 2px solid transparent;

  & >svg {
    transition: all 0.4s ease; 
    fill: var(--white);
}
 }

`;
export const hoverStylesY = `


& >svg {

  fill: var(--white);
  }

  &:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, var( --gradient-yl), var(--gradient-yr));
  color: var(--white);
 }
}
`;

export const gridBtnStyles=`
display: grid;
place-items: center;
width: 40px;
height: 40px;
border-radius: 50%;
border: none;
cursor: pointer;
`

export const StyledButton = styled.button.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'addPet' && prop !== 'stepNumber' && prop !== 'addPetMoreInformation',
})`
    ${buttonStyles};
    ${ripple};

    background-color: var(--blue);
    color: var(--fone-color);
    transition: all 0.4s ease;
    width: ${({ addPet }) => addPet && '100%'};

    @media screen and (min-width: 768px) {
      width: ${({ addPet }) => addPet && '68%'};
      width: ${({ stepNumber }) => stepNumber > 1 && '72%'};
      width: ${({ addPetMoreInformation }) => addPetMoreInformation && '38%'};
  }


    & > svg {
        fill: var(--fone-color);
    }

    &:hover {
        transition: all 0.4s ease;
        background: linear-gradient(
            to right,
            var(--gradient-bl),
            var(--gradient-br)
        );
        color: var(--fone-color);
    }
`;

export const StyledButtonTransparent = styled.button.withConfig({
    shouldForwardProp: prop => isPropValid(prop) && prop !== 'addPet',
})`
    ${buttonStyles};
    ${ripple};

    border: 2px solid var(--blue);
    background-color: transparent;
    color: var(--blue);
    transition: all 0.4s ease;
    border: ${({ addPet }) => addPet && "transparent" };
    background-color: ${({ addPet }) => addPet && 'transparent'};

    & > svg {
        fill: var(--blue);
    }

    &:hover {
        transition: all 0.4s ease;
        background: linear-gradient(to right, #88c7fc, #4da5f3);
        color: var(--fone-color);

        & > svg {
            transition: all 0.4s ease;
            color: var(--fone-color);
            fill: var(--white);
            stroke: var(--white);
        }
    }
`;

export const StyledLogButton = styled.button`
    ${buttonStyles};
    ${ripple};

    background-color: var(--yellow);
    color: var(--fone-color);
    width: 165px;

${buttonStyles} 
 ${ripple} 
 
 background-color: var(--yellow);
 color: var(--white);
 width: 165px;
 
 ${hoverStylesY} 
`;

export const StyledRegButton = styled.button`
    ${buttonStyles}
    ${ripple} 

border: 2px solid var(--yellow);
    background-color: var(--fone-color);
    color: var(--yellow);
    width: 165px;
    transition: all 0.4s ease;

    ${hoverStylesY};


`;


export const StyledOutButton = styled(NavLink)`
${buttonStyles} 
${ripple} 

border: 2px solid var(--blue);
background-color: var(--blue);
color: var(--white);
width: 135px;
transition: all 0.4s ease; 

${hoverStylesB} 

 &:hover  {
  border: 2px solid transparent;
 }
 & >svg {
width: 24px;
transform: rotate(180deg);
}


    ${hoverStylesB}

    &:hover {
        border: 2px solid transparent;
    }
    & > svg {
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
    ${buttonStyles};
    ${ripple};

    border: 2px solid var(--blue);
    background-color: var(--blue);
    color: var(--fone-color);
    width: 130px;


    ${hoverStylesB};

    &:hover {
        border: 2px solid transparent;
    }

    @media screen and ( max-width: 767px ) {
      position: fixed;
      left: 60%;
      bottom: 200px;

      width: 80px;
      height: 80px;
      border-radius: 50%;
      padding: 2px;
      flex-direction: column-reverse;
      font-size: 12px;
      gap: 12px;
      z-index: 2;

      &>svg{
        scale: 2;
      }
      
    }
`;
export const StyledAddFavButton = styled.button.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) &&
      prop !== 'isLike' &&
      prop !== 'currentDiv'
})`
    ${buttonStyles};
    ${ripple};

    border: 2px solid var(--blue);
    background-color: var(--blue);
    color: var(--fone-color);
    width: 130px;


    ${hoverStylesB};

    &:hover {
        border: 2px solid transparent;
    }

    @media screen and ( max-width: 767px ) {
      position: fixed;
      left: 60%;
      bottom: 200px;

      width: 80px;
      height: 80px;
      border-radius: 50%;
      padding: 2px;
      flex-direction: column-reverse;
      font-size: 12px;
      gap: 12px;
      z-index: 5;

      &>svg{
        scale: 2;
      }
      
    }
`;

export const StyledContactButton = styled(NavLink)`
    ${buttonStyles};
    ${ripple};
    ${hoverStylesTrB};


${buttonStyles} 
${ripple} 
${hoverStylesTrB} 
background-color: transparent;
width: 152px;
`;

export const StyledLearnButton = styled.button`
    ${buttonStyles}
    ${ripple} 
${hoverStylesTrB} 



width: 248px;
height: 38px;

`;

export const StyledRadioButton = styled.button`
    ${buttonStyles}
    /* ${hoverStylesTrB}  */

background-color: var(--light-blue);
color: var(--blue);
transition: all 0.4s ease; 
border: none;
height: 35px;
font-size: 12px;


`;

export const StyledFavButton = styled.button.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) &&
      prop !== 'isLike' &&
      prop !== 'currentDiv'
})`

${ripple} 
${hoverStylesTrB} 
${gridBtnStyles} 

background-color: ${({ isLike, currentDiv }) => isLike === currentDiv ? 'var(--blue)' : "var(--light-blue)"};
& > svg {
  fill: ${({ isLike, currentDiv }) => isLike === currentDiv ? 'var(--white)' : "var(-blue)"};
}

`
export const StyledTrashButton = styled.button.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) &&
      prop !== 'isLike' &&
      prop !== 'currentDiv'
})`

${ripple} 
${hoverStylesTrB} 
${gridBtnStyles} 

background-color: var(--light-blue);

`

export const StyledFormButton = styled.button`

${gridBtnStyles} 

`



export const StyledLink = styled(NavLink)`
${buttonStyles} 
 ${ripple} 

 background-color: var(--blue);
 color: var(--white);
 transition: all 0.4s ease; 

 & >svg {

fill: var(--white);
}

&:hover  {
  transition: all 0.4s ease; 
  background: linear-gradient(to right, var( --gradient-bl), var(--gradient-br));
  color: var(--white);
 }

  &.active {
    color: #eee;
  
  }
`;

export const StyledLogo = styled(NavLink)`
border: none;
outline: none;
background-color: transparent;
padding: 12px 0;

&>svg {
   fill-opacity: var(--text-color);
}

&>:hover {
  animation-duration: 0.1s;
  animation: ${rotate} 1s ease;   
  cursor: pointer;

}

`

