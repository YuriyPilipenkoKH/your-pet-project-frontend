import { StyledTab } from "./Tab.styled"


export const Tab = ({className, icon, text, }) => {

return(
    <StyledTab className = {className}>
        {icon}
        <div>{text}</div>
    </StyledTab>

)
}