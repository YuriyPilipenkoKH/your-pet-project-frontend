import { StyledTab } from "./Tab.styled"


export const Tab = ({icon, text, className}) => {

return(
    <StyledTab className = {className}>
        {icon}
        {text}
    </StyledTab>

)
}