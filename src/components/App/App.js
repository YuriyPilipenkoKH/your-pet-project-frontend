import {  iconLogo,  } from "../../images/icons";


import { StyledLogo } from "../Button/Button.styled";
import { Container } from "../Container/Container";



const App =() => {
  return (
  <Container>
    <StyledLogo>{iconLogo}</StyledLogo>
      <h2> React </h2>

  </Container>
  );  
}

export default App;
