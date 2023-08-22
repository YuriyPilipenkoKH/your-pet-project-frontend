import { iconPawprint } from '../../images/icons';
import { AuthBtnWrap, StyledLinkLog, StyledLinkReg } from './AuthNav.styled';

export const AuthNav = ({onClose}) => {
  return (
    <AuthBtnWrap className= "AuthNav">
      <StyledLinkLog to="/login" exact="true"  onClick={onClose}>
        Log In {iconPawprint}
      </StyledLinkLog>
      <StyledLinkReg to="/register" exact="true"  onClick={onClose}>
        Register
      </StyledLinkReg>
    </AuthBtnWrap>
  );
};
