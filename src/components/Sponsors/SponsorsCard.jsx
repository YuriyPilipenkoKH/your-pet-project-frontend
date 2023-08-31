import { Calendar, LinkSpan } from 'pages/pages.styled/Pages.styled';
import { useState } from 'react';
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

    const [selectedDay, setSelectedDay] = useState(null);
    const [showWorkHours, setShowWorkHours] = useState(false)

    const togglePopup = (index) => {
      setSelectedDay(selectedDay === index ? null : index);
    };

  
    // const workHours = [
    //     { isOpen: false,  },
    //     { isOpen: false,  },
    //     { isOpen: false,  },
    //     { isOpen: false,  },
    //     { isOpen: false,  },
    //     { isOpen: true, from: '11:00', to: '16:00' },
    //     { isOpen: true, from: '11:00', to: '16:00' },
       
    //   ]
const days = [ 'MN', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU' ]
    const email = item.email ? item.email : 'notemail@gmail.com';
    const phone = item.phone ? item.phone : 'notphone';
    let fromTime =
        (item?.workDays && item.workDays[0]?.from) ||
        (item?.workDays && item.workDays[5]?.from) ||
        'day and night';
    let toTime =
        (item?.workDays && item.workDays[0]?.to) ||
        (item?.workDays && item.workDays[5]?.to) ||
        '';
    const openDaysCount = item?.workDays
        ? item.workDays.filter(day => day.isOpen).length
        : 0;
    const workSchedule =
        openDaysCount === 7
            ? 'everyday'
            : openDaysCount === 2
            ? 'weekends'
            : openDaysCount === 5
            ? 'weekdays'
            : 'everyday';
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
                            Time:{' '}
                            {workSchedule}
                        </SponsorText>
                        {/* <Span> few</Span> */}
                        <Span 
                        onClick ={() => console.log('data')}>
                            {fromTime} {toTime !== "" && "-"} {toTime}
                        </Span>

                        {/* {!showWorkHours && (
                            <></>
                        )} */}

                        {/* {!showWorkHours && (
                            
                        <Calendar className='Calendar'>
                        {openDaysCount.map((day, index) => (
                          <div key={index}>
                            {day.isOpen && (
                              <>
                                <p>{days[index]}</p>
                                <span>{day.from || "---"}</span>
                                <span>{day.to || '---'}</span>
                              </>
                            )}
                          </div>
                        ))}
                      </Calendar>
                            )} */}
                    </TextWrap>
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__address">
                            Adress:
                        </SponsorText>
                        <LinkSpan>
                            {item.address 
                            ?  <a
                            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.address)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {item.address}  </a>
                            : "shop online"}
                            </LinkSpan>
                    </TextWrap>
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__email">
                            Email:
                        </SponsorText>
                        <LinkSpan>
                        <a href={`mailto:${email}`}>{email}</a>
                            </LinkSpan>
                    </TextWrap>
                    <TextWrap className="text-wrap">
                        <SponsorText className="sponsors__phone">
                            Phone:
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


