import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Btn = styled(Link)`
    display: flex;
    flex-direction: column;
    /* position: absolute;
    top: 160px;
    right: 0;
    width: 80px;
    height: 80px; */
    
    border-radius: 50%;

    stroke: #fff;

    align-items: center;
    justify-content: center;
    gap: 8px;

    padding-top: 8px;
    padding-bottom: 8px;
    padding-left: 16px;
    padding-right: 16px;

    font-family: Manrope;
    font-weight: 600;
    font-size: 12px;
    color: #fff;

    background: linear-gradient(290.46deg, #419ef1 0%, #9bd0ff 107.89%);
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

    z-index: 1;

    transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1);

    &:hover,
    &:focus {
        background: linear-gradient(290.46deg, #9bd0ff 0%, #419ef1 107.89%);
    }

    @media screen and (min-width: 768px) {
        position: static;

        flex-direction: row;
        gap: 8px;

        width: 129px;
        height: 40px;
        padding-top: 4px;
        padding-bottom: 4px;
        padding-left: 16px;
        padding-right: 16px;

        font-weight: 700;
        font-size: 16px;

        border-radius: 40px;

        background: none;
        background-color: #419ef1;
        
        transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);

        &:hover,
        &:focus {
            background: none;
            background-color: #9bd0ff;
        }
    }


    @media screen and ( max-width: 767px ) {
      position: fixed;
      left: 70%;
      bottom: 200px;

       width: 80px;
      height: 80px;
      border-radius: 50%;
      padding: 2px;
         
    }
`;

export { Btn };
