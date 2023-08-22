
import { iconClock, iconFem, iconHeart, iconMap } from "../../images/icons";
import { ButtonTransparent, FavButton } from "../Button/Button"
import { Tab } from "../Tab/Tab"
import { CardTitle, CardWrapper, ImgWrapper } from "./MainCard.styled"
import { CategoryWrapp } from "../Tab/Tab.styled";



export const MainCard = ( ) => {

return(
    <CardWrapper>
      <ImgWrapper>
        <CategoryWrapp className='category'> {'In good hands'} </CategoryWrapp>
        <FavButton className='fav'> {iconHeart}</FavButton>

        <Tab className="tab1" text= {'Ivano'} icon = {iconMap}  ></Tab>
        <Tab className='tab2' text= {'1 year'} icon = {iconClock }  ></Tab>
        <Tab className='tab3' text= {'female'} icon = {iconFem}  ></Tab>
    

      </ImgWrapper>

      <CardTitle>Сute kitty looking for a home</CardTitle>
      <ButtonTransparent>Learn more</ButtonTransparent>
    </CardWrapper>
)
}