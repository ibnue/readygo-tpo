import React from 'react';
import styled from 'styled-components';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import COLORS from '../../styles/colors'
import { FONT_STYLES } from '../../styles/font-style';

import IcLocation from '../../assets/ic-location.png';
import IcAlarm from '../../assets/ic-alarm.png';
import IcSettings from '../../assets/ic-settings.png';
import MainSample from '../../assets/img-main-sample.png';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

  const Styled = {
    Wrap: styled.div`
    `,
    System: styled.div`
      width: 100%;
      height: 44px;
      background-color: ${COLORS.Gray100};
    `,
    Header: styled.div`
      height: 52px;
      background-color: ${COLORS.Gray200};
      display: flex;
      justify-content: space-between;
      align-items: center;
    `,
    LocationTxt: styled.div`
      ${FONT_STYLES.R_12}
    `,
    LeftWrap: styled.div`
      display: flex;
    `,
    RightIconWrap: styled.div`
      display: flex;
    `,
  }

  const Icon = {
    Location: styled.img`
      width: 16px;
      height: 16px;
      margin: 0px 20px;
    `,
    Alarm: styled.img`
      width: 16px;
      height: 16px;
      margin-right: 11px;
    `,
    Settings: styled.img`
      width: 16px;
      height: 16px;
      margin-right: 20px;
    `,
  };

  const Banner = {
    MainImg: styled.div`
      width: 375px;
      height: 375px;
      background-image: url(${MainSample});
      background-repeat: no-repeat;
      background-size: cover;
      margin-bottom: 25px;
    `,
    WhiteArea: styled.div`
      width: 335px;
      height: 63px;
      background-color: ${COLORS.White};
      border-radius: 100px;
      margin-top: 284px;
      text-align: center;
    `,
    BannerWrap: styled.div`
      display: flex;
      height: 375px;
      justify-content: center;
    `,
  };

  const Category = {
    TitleTxt: styled.div`
      ${FONT_STYLES.B_16}
    `,
    MoreTxt: styled.div`
      ${FONT_STYLES.R_11}
    `,
    Header: styled.div`
      margin: 0px 20px;
      display: flex;
      justify-content: space-between;
    `,
  }

  const Carousel = {
    Wrap: styled.div`
      height: 156px;
      background-color: lightgreen;
    `,
  }


function Home() {
  return (
    <div>
      <Styled.System />
      <Styled.Header>
        <Styled.LeftWrap>
          <Icon.Location src={IcLocation} />
          <Styled.LocationTxt>Dongjak-gu, Sangdo-dong</Styled.LocationTxt>
        </Styled.LeftWrap>

        <Styled.RightIconWrap>
          <Icon.Alarm src={IcAlarm} />
          <Icon.Settings src={IcSettings} />
        </Styled.RightIconWrap>
      </Styled.Header>

      <Banner.MainImg>
        <Banner.BannerWrap>
          <Banner.WhiteArea>~~~기상청API연동~~~</Banner.WhiteArea>
        </Banner.BannerWrap>
      </Banner.MainImg>

      <Category.Header>
        <Category.TitleTxt>Top</Category.TitleTxt>
        <Category.MoreTxt>More</Category.MoreTxt>
      </Category.Header>

      <Carousel.Wrap>
        <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        <SwiperSlide>Slide 1111111</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
      </Swiper>
    </Carousel.Wrap>
    </div>
  )
}

export default Home
