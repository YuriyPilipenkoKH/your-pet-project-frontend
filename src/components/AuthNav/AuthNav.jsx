import { AuthBtnWrap, StyledLinkLog, StyledLinkReg } from "./AuthNav.styled";




export const AuthNav = () => {
  return (
    
    <AuthBtnWrap>
    <StyledLinkReg to="/register" 
    exact="true"
    >
      Register
    </StyledLinkReg>
    <StyledLinkLog to="/login" 
    exact="true"
    >
      Login
    </StyledLinkLog>
  </AuthBtnWrap>
  );
}