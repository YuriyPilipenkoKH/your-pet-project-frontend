import styled from 'styled-components';

export const NewsCardWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 280px;
  height: 578px;
  gap: 12px;
  border-radius: 20px;
  background-color: var(--white);
  box-shadow: var(--shadow-default);
  transition: all 0.4s ease-in;
  &:hover {
    box-shadow: var(--shadow-hover);
  }

  @media screen and (min-width: 768px) {
    width: 336px;
    height: 556px;
  }
  @media screen and (min-width: 1280px) {
    width: 395px;
    height: 534px;
  }
`;

export const ActivLin = styled.div`
  position: absolute;
  top: -15px;
  width: 100%;
  height: 8px;
  border-radius: 4px;
  background-color: var(--blue);
`;

export const NewsImage = styled.img`
  width: 280px;
  height: 252px;
  border-radius: 20px;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 100%;
    height: 252px;
  }
`;

export const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 12px 12px;
  height: 350px;
`;

export const NewsTitle = styled.h2`
  font-size: 24px;
  font-weight: 600;
  text-align: left;
`;

export const NewsText = styled.p`
  font-size: 16px;
`;
export const WrapperData = styled.div`
  display: flex;
  margin-top: auto;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

export const NewsDate = styled.p`
  font-size: 16px;
  color: #888888;
  margin: 0;
`;

export const NewsLink = styled.a`
  font-size: 16px;
  color: var(--blue);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;