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




export const NewsCard = (item) => {
  
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
          <NewsDate className="news-card__date">{item.date}</NewsDate>
          <NewsLink className="news-card__link">{'Read more'}</NewsLink>
        </WrapperData>
      </NewsContent>
    </NewsCardWrapper>
  );
};