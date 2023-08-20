import {ImgWrap, Span, SponsorCardTitle, SponsorCardWrapper, SponsorContent, SponsorImage, SponsorText, TextWrap, WrapContent} from "./Sponsors.styled"

const test = {
    title: 'ЛКП “ЛЕВ”',
    url: 'https://lkplev.com/',
    addressUrl: 'https://goo.gl/maps/4xMfxtahHPfXeAYU8',
    imageUrl:
        'https://storage.googleapis.com/kidslikev2_bucket/pets-support/images/sponsors/frame_289.png',
    address: '79024, м.Львів, вул. Промислова 56',
    workDays: null,
    phone: '+380685354545',
    email: null,
};

export const SponsorCard = item => {
    return (
      
        <SponsorCardWrapper className="sponsors-card">
        <SponsorCardTitle className="sponsors__title" href={test.url} target="_blank" rel="noopener noreferrer">{test.title}</SponsorCardTitle>
            <WrapContent className="wrap-content">
              <ImgWrap className="imgWrap">
              <SponsorImage
                  src={test.imageUrl}
                  alt="News"
                  className="sponsors__image"
              />
              </ImgWrap>

              <SponsorContent className="sponsors-content">
                  <TextWrap className="text-wrap">
                    <SponsorText className="sponsors__workDays">Time:</SponsorText><Span>{'test.workDays'}</Span>
                  </TextWrap>
                  <TextWrap className="text-wrap">
                    <SponsorText className="sponsors__address">Adress:</SponsorText><Span>{'test.address'}</Span>
                  </TextWrap>
                  <TextWrap className="text-wrap">
                    <SponsorText className="sponsors__email">Email:</SponsorText><Span>{'test.email'}</Span>
                  </TextWrap>
                  <TextWrap className="text-wrap">
                    <SponsorText className="sponsors__phone">Phone:</SponsorText><Span>{'test.phone'}</Span>
                  </TextWrap>
              </SponsorContent>
            </WrapContent>
        </SponsorCardWrapper>
      
    );
};
