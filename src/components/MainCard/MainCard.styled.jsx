import isPropValid from '@emotion/is-prop-valid';
import styled from 'styled-components';

// import bgImgD from '../../images/cat-d.png';
// import bgImgD2 from '../../images/cat-d@2x.png';
// import bgImgM from '../../images/cat-m.png';
// import bgImgM2 from '../../images/cat-m@2x.png';
// import bgImgT from '../../images/cat-t.png';
// import bgImgT2 from '../../images/cat-m@2x.png';

export const CardWrapper = styled.div`
    display: flex ;

    flex-direction: column;
    gap: 20px;
    width: 280px;
    height: 458px;
    padding: 0 0 24px;
    background-color: var(--card-color);
    border-radius: 0 0 40px 40px;
    box-shadow: var(--shadow-default);
    transition: all 1s ease-in-out;


    @media screen and (min-width: 768px) {
        width: 336px;
    }

      @media screen and (min-width: 1280px) {
         width: 288px;
    }

    &:hover,
    &:focus {
        box-shadow: var(--shadow-hover); 
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


export const Im = styled.div`

    /* grid-row-start: 1;
    grid-row-end: 3; */
`



export const ImgWrapper = styled.div.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) && prop !== 'active' && prop !== 'photo',
})`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    justify-items: center;
    grid-template-rows: 40px auto 32px  ;
    grid-row-gap: 16px;
    grid-template-areas:
    'top top fav'
    '. . del'
    't1 t2 t3'  ;

    &>.category{
      grid-area: top;
      width: 130px;
      justify-self: start;
    }
    &>.fav{
      grid-area: fav;
      justify-self: end;
      transform: translateX(-8px);
    }
    &>.del{
      grid-area: del;
      justify-self: end;
      transform: translateX(-8px);

      &>svg{
        fill:#777;
      }
    }
    &>.tab1{
      grid-area: t1;
      
    }
    &>.tab2{
      grid-area: t2;
    }
    &>.tab3{
      grid-area: t3;
    }

    width: 280px;
    height: 288px;
    padding: 16px 8px 16px 0;

    @media screen and (min-width: 768px) {
  
      width: 336px;
}

  @media screen and (min-width: 1280px) {
    
    width: 288px;

}      
   background-image: url(${props => props.photo});
   /* background-image: url(${'bgImgM'}); */
    background-size: cover;
    background-position: center;  
 

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${props => props.photo});
  }
  @media screen and (min-width: 768px) {
   
    
    background-image: url(${props => props.photo});
    

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${props => props.photo});
    }
}
@media screen and (min-width: 1280px) {
  
    
    background-image: url(${props => props.photo});

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${props => props.photo});
    }
  }

`
export const CardTitle = styled.div`
    font-size: 24px;
    font-weight: 700;
    padding: 0 20px;
    height: 66px;
    overflow: hidden;
    text-overflow: ellipsis; 
    color: var(--text-color);
    transition: all 1s ease-in-out;
    -webkit-box-orient: vertical ;
    -webkit-line-clamp: 2 ; 
    /* Number of lines to display */
`
    /* white-space: nowrap;   */