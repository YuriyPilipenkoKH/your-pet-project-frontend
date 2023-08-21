import styled from 'styled-components';

import bgImgD from '../../images/cat-d.png';
import bgImgD2 from '../../images/cat-d@2x.png';
import bgImgM from '../../images/cat-m.png';
import bgImgM2 from '../../images/cat-m@2x.png';
import bgImgT from '../../images/cat-t.png';
import bgImgT2 from '../../images/cat-m@2x.png';

export const CardWrapper = styled.div`
    display: grid;
    gap: 20px;
    width: 280px;
    height: 458px;
    padding: 0 0 24px;
    background-color: var(--white);
    border-radius: 0 0 40px 40px;
    box-shadow: var(-shadow-default);
    transition: all 0.4s ease;

    @media screen and (min-width: 768px) {
  
      width: 336px;
    }

      @media screen and (min-width: 1280px) {
        
        width: 288px;
    }

    &:hover,
    &:focus {
        box-shadow: var(-shadow-hover); 
        scale: 1.01;
        outline: none;
    }

    &>button{
        height: 38px;
        width: 240px;
        align-self: center;
        margin: 0 auto;

        &>svg{
        
          fill: var(--blue);
        }
    }

`
export const ImgWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-template-rows: auto 32px  ;
    grid-template-areas:
    'top 0 fav'
    't1 t2 t3'  ;

    width: 280px;
    height: 288px;
    padding: 16px 8px 16px 0;


    @media screen and (min-width: 768px) {
  
  width: 336px;
}

  @media screen and (min-width: 1280px) {
    
    width: 288px;
}

    background-image: url("${bgImgM}");
 

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url('${bgImgM2}');
  }
  @media screen and (min-width: 768px) {
   
    
    background-image: url('${bgImgT}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgImgT2}');
    }
}
@media screen and (min-width: 1280px) {
  
    
    background-image: url('${bgImgD}');

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url('${bgImgD2}');
    }
  }


  &>.category{
      grid-area: top;
      grid-column-start: 1;
      grid-column-end: 3;
      max-width: 130px;
      justify-self: start;
  /* grid-row-start: 1;
  grid-row-end: 3; */
    }
    &>.fav{
      grid-area: fav;
      justify-self: end;
    }
    &>.tab1{
      grid-area: t1;
      align-self: end;
    }
    &>.tab2{
      grid-area: t2;
    }
    &>.tab3{
      grid-area: t3;
    }
`
export const CardTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    padding: 0 20px;


`