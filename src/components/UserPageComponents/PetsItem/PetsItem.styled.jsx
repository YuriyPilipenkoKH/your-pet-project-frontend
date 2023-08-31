import styled from 'styled-components';

export const MyPetCard = styled.li`
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 40px;
    padding-left: 20px;

    margin-bottom: 20px;

    background: var(--background-color-form);
    transition: all 1s ease-in-out;
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);
    border-radius: 20px;
    width: 100%;
    @media screen and (min-width: 768px) {
        display: flex;
        gap: 20px;
        padding: 20px;
        width: 703px;
    }
    @media screen and (min-width: 1280px) {
        display: flex;
        gap: 20px;
        padding: 20px;
        width: 821px;
    }
`;

export const InfoWrap = styled.div`
    width: 100%;
    @media screen and (min-width: 768px) {
        width: 515px;
    }
    @media screen and (min-width: 1280px) {
        width: 580px;
    }
    &>div>p {
        
    }
`;

export const PetImage = styled.img`
    width: 240px;
    height: 240px;
    object-fit: cover;
    margin-top: 0;
    margin-right: auto;
    margin-bottom: 20px;
    margin-left: auto;

    border-radius: 20px;
    @media screen and (min-width: 768px) {
        width: 128px;
        height: 128px;

        margin: 0;
    }
`;

export const SubTitle = styled.p`
    font-weight: 700;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: var(--text-color);
    letter-spacing: 0.56px;
    transition: all 1s ease-in-out;
    @media screen and (min-width: 768px) {
        font-weight: 600;
        line-height: normal;
    }
    @media screen and (min-width: 1280px) {
        font-size: 16px;
        letter-spacing: 0.64px;
    }
`;

export const NameWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const InfoItem = styled.div`
    display: flex;
    margin-bottom: 12px;
    gap: 3px;
    @media screen and (min-width: 768px) {
        margin-bottom: 16px;
    }
`;

export const InfoText = styled.span`
    display: inline;
    font-weight: 400;
    font-size: 14px;
    word-break: break-word;
    overflow-wrap: break-word;
    color: var(--text-color);
    letter-spacing: 0.56px;
    line-height: normal;
    transition: all 1s ease-in-out;
    @media screen and (min-width: 1280px) {
        font-size: 16px;
        letter-spacing: 0.64px;
    }
`;

export const PetComment = styled.p`
    display: inline;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.36;
    letter-spacing: 0.04em;
    color: var(--text-color);
    transition: all 1s ease-in-out;
    @media screen and (min-width: 768px) {
        font-weight: 600;
    }
`;
