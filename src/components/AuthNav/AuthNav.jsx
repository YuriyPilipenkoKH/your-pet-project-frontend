import { iconPawprint } from '../../images/icons';
import { AuthBtnWrap, StyledLinkLog, StyledLinkReg } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <AuthBtnWrap>
      <StyledLinkLog to="/login" exact="true">
        Log In {iconPawprint}
      </StyledLinkLog>
      <StyledLinkReg to="/register" exact="true">
        Register
      </StyledLinkReg>
    </AuthBtnWrap>
  );
};
