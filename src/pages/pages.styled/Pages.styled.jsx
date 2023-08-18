import styled from "styled-components";

import bgImgD from "../../images/home-bg-d.png";
import bgImgD2 from "../../images/home-bg-d@2x.png";
import bgImgM from "../../images/home-bg-m.png";
import bgImgM2 from "../../images/home-bg-m@2x.png";
import bgImgT from "../../images/home-bg-t.png";
import bgImgT2 from "../../images/home-bg-m@2x.png";

// Home
export const HomeWrapper = styled.div`

  height: 600px;
  background-image: url("${bgImgM}");
  padding: 20px;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url("${bgImgM2}");
  }

  @media screen and (min-width: 768px) {
    height: 1024px;
    background-image: url("${bgImgT}");

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url("${bgImgT2}");
    }
  }

  @media screen and (min-width: 1280px) {
    display: flex;
    align-items: center;
    justify-content:start;
    height: 768px;
    background-image: url("${bgImgD}");

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url("${bgImgD2}");
    }
  }
`;
// Home title
export const HomeTitle = styled.h1`
  width: 280px;
  font-size: 32px;
  font-weight: 700;
  color: #000000;
  @media screen and (min-width: 768px) {
    width: 588px;
    font-size: 68px;
    font-weight: 600;
  };
  
  @media screen and (min-width: 1280px) {
   
    width: 500px;
    font-size: 68px;
    font-weight: 800;
  };
`;
