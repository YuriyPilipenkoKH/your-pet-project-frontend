import {
  ActivLin,
  NewsCardWrapper,
  NewsContent,
  NewsDate,
  NewsImage,
  NewsLink,
  NewsText,
  NewsTitle,
  WrapperData,
} from './News.styled';
import { format } from 'date-fns';




export const NewsCard = (item) => {
  const formatedDate = format(new Date(item.date), 'dd/MM/yyyy');
  
  return (
    <NewsCardWrapper className="news-card">
      <ActivLin className="activ-lin"></ActivLin>
      <NewsImage src={item.imgUrl} alt="News" className="news-card__image" />

      <NewsContent className="news-content">
        <NewsTitle className="news-card__title">
        {item.title}
        </NewsTitle>
        <NewsText className="news-card__text">
          {item.text}
        </NewsText>
        <WrapperData className="wrapper-data">
          <NewsDate className="news-card__date">{formatedDate}</NewsDate>
          <NewsLink href={item.url} className="news-card__link">{'Read more'}</NewsLink>
        </WrapperData>
      </NewsContent>
    </NewsCardWrapper>
  );
};