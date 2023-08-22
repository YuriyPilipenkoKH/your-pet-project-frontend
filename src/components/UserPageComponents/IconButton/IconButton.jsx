import { Btn } from './IconButton.styled';

const IconButton = ({ type, icon}) => {
    return (
        // <Btn type={type} onClick={handler???}>
        <Btn type={type}>
            {icon}
        </Btn>
    );
};

export default IconButton;
