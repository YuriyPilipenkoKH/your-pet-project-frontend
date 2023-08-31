import { LinkSpan } from 'pages/pages.styled/Pages.styled';
import {  useEffect, useState } from 'react';
import {
    ImgWrap,
    Span,
    SponsorCardTitle,
    SponsorCardWrapper,
    SponsorContent,
    SponsorImage,
    SponsorText,
    TextOclock,
    TextWrap,
    WrapContent,
    WrapperOclock,
    Calendar,
} from './Sponsors.styled';
import { useAll } from 'hooks/useAll';
import { langEN, langUA } from 'utils/languages';

export const SponsorCard = ({ item }) => {

    const [showWorkHours, setShowWorkHours] = useState(false);
    const { language} = useAll()
    const [lang, setLang] = useState(langUA)
    
    useEffect(() => {
        setLang(language === 'english' ?  langEN :  langUA);
      }, [language])

    const email = item.email ? item.email : 'notemail@gmail.com';
    const phone = item.phone ? item.phone : 'notphone';
    let fromTime =
        (item?.workDays && item.workDays[0]?.from) ||
        (item?.workDays && item.workDays[5]?.from) ||
        lang.daynight;
    let toTime =
        (item?.workDays && item.workDays[0]?.to) ||
        (item?.workDays && item.workDays[5]?.to) ||
        '';
    const openDaysCount = item?.workDays
        ? item.workDays.filter(day => day.isOpen).length
        : 0;
    const workSchedule =
        openDaysCount === 7
            ? lang.everyday
            : openDaysCount === 2
            ? lang.weekends
            : openDaysCount === 5
            ? lang.weekends
            : lang.everyday
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
                    <TextWrap onClick={() => setShowWorkHours(!showWorkHours)} className="text-wrap">
                        <SponsorText showWorkHours={showWorkHours} className="sponsors__workDays">
                        {lang.time}: {workSchedule}
                        </SponsorText>
                        <Span  showWorkHours={showWorkHours}>
                            {fromTime} {toTime !== '' && '-'} {toTime}
                        </Span>
                        {showWorkHours &&
                            (openDaysCount === 7 ? (
                                <Calendar>
                                    <WrapperOclock>
                                        <TextOclock>{lang.mn}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.tu}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.we}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.th}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.fr}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.sa}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.su}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                </Calendar>
                            ) : openDaysCount === 2 ? (
                                <Calendar>
                                    <WrapperOclock>
                                        <TextOclock>{lang.mn}</TextOclock>
                                        <TextOclock>{lang.closed}</TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.tu}</TextOclock>
                                        <TextOclock>{lang.closed}</TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.we}</TextOclock>
                                        <TextOclock>{lang.closed}</TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.th}</TextOclock>
                                        <TextOclock>{lang.closed}</TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.fr}</TextOclock>
                                        <TextOclock>{lang.closed}</TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.sa}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.su}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                </Calendar>
                            ) : openDaysCount === 5 ? (
                                <Calendar>
                                    <WrapperOclock>
                                        <TextOclock>{lang.mn}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.tu}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.we}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.th}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.fr}</TextOclock>
                                        <TextOclock>
                                            {fromTime} {toTime !== '' && '-'}{' '}
                                            {toTime}
                                        </TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.sa}</TextOclock>
                                        <TextOclock>{lang.closed}</TextOclock>
                                    </WrapperOclock>
                                    <WrapperOclock>
                                        <TextOclock>{lang.su}</TextOclock>
                                        <TextOclock>{lang.closed}</TextOclock>
                                    </WrapperOclock>
                                </Calendar>
                            ) : (
                                <Calendar>
                                    <TextOclock>Work only online</TextOclock>
                                </Calendar>
                            ))}
                    </TextWrap>
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__address">
                        {lang.adress}:
                        </SponsorText>
                        <LinkSpan>
                            {item.address ? (
                                <a
                                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                                        item.address
                                    )}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {item.address}{' '}
                                </a>
                            ) : (
                                'shop online'
                            )}
                        </LinkSpan>
                    </TextWrap>
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__email">
                        {lang.email}:
                        </SponsorText>
                        <LinkSpan>
                            <a href={`mailto:${email}`}>{email}</a>
                        </LinkSpan>
                    </TextWrap>
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__phone">
                        {lang.phone}:
                        </SponsorText>
                        <LinkSpan>
                            <a href={`tel:${phone}`}>{phone}</a>
                        </LinkSpan>
                    </TextWrap>
                </SponsorContent>
            </WrapContent>
        </SponsorCardWrapper>
    );
};
