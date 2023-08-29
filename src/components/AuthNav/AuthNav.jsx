import {  useEffect, useState } from 'react';
import { iconPawprint } from '../../images/icons';
import { AuthBtnWrap, StyledLinkLog, StyledLinkReg } from './AuthNav.styled';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

export const AuthNav = ({onClose}) => {

  const { language} = useAll()
  const [lang, setLang] = useState(langUA)

  useEffect(() => {
    setLang(language === 'english' ?  langEN :  langUA);
  }, [language])
  return (
    <AuthBtnWrap className= "AuthNav">
      <StyledLinkLog to="/login" exact="true"  onClick={onClose}>
        {lang.logBtn} {iconPawprint}
      </StyledLinkLog>
      <StyledLinkReg to="/register" exact="true"  onClick={onClose}>
        {lang.regBtn}
      </StyledLinkReg>
    </AuthBtnWrap>
  );
};
