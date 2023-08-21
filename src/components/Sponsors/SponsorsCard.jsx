
import {
    ImgWrap,
    Span,
    SponsorCardTitle,
    SponsorCardWrapper,
    SponsorContent,
    SponsorImage,
    SponsorText,
    TextWrap,
    WrapContent,
} from './Sponsors.styled';

export const SponsorCard = ({ item }) => {
  const workDay = item.workDay? item.workDay: "closed"
    const email = item.email ? item.email : 'notemail@gmail.com';
    const phone = item.phone ? item.phone : 'notphone';

    return (
        <SponsorCardWrapper className="sponsors-card">
            <SponsorCardTitle
                className="sponsors__title"
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
            >
                {item.title}
            </SponsorCardTitle>
            <WrapContent className="wrap-content">
                <ImgWrap className="imgWrap">
                    <SponsorImage
                        src={item.imageUrl}
                        alt="Sponsor"
                        className="sponsors__image"
                    />
                </ImgWrap>

                <SponsorContent className="sponsors-content">
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__workDays">
                            Time:
                        </SponsorText>
                        <Span> {workDay}</Span>
                    </TextWrap>
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__address">
                            Adress:
                        </SponsorText>
                        <Span>{item.address}</Span>
                    </TextWrap>
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__email">
                            Email:
                        </SponsorText>
                        <Span>{email}</Span>
                    </TextWrap>
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__phone">
                            Phone:
                        </SponsorText>
                        <Span>{phone}</Span>
                    </TextWrap>
                </SponsorContent>
            </WrapContent>
        </SponsorCardWrapper>
    );
};
