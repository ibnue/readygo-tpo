import React from 'react';
// import styled from 'styled-components';
// import { Pagination, FreeMode } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import COLORS from '../../styles/colors'
// import { FONT_STYLES } from '../../styles/font-style';
//
// import IcLocation from '../../assets/ic-location.png';
// import IcAlarm from '../../assets/ic-alarm.png';
// import IcSettings from '../../assets/ic-settings.png';
// import IcDivision from '../../assets/ic-division-white.png';
// import IcDivisionGray from '../../assets/ic-division-gray.png';
// import IcClock from '../../assets/ic-clock.png';
// import MainSample from '../../assets/img-main-sample.png';
// import DummyCard from '../../assets/img-dummy-card.png';
//
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';
//
// const images = [DummyCard, DummyCard, DummyCard, DummyCard, DummyCard, DummyCard];
//
//   const Styled = {
//     Wrap: styled.div`
//     `,
//     System: styled.div`
//       width: 100%;
//       height: 44px;
//       background-color: ${COLORS.Gray100};
//     `,
//     Header: styled.div`
//       height: 52px;
//       background-color: ${COLORS.Gray200};
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     `,
//     LocationTxt: styled.div`
//       ${FONT_STYLES.R_12}
//     `,
//     LeftWrap: styled.div`
//       display: flex;
//     `,
//     RightIconWrap: styled.div`
//       display: flex;
//     `,
//   }
//
//   const Icon = {
//     Location: styled.img`
//       width: 16px;
//       height: 16px;
//       margin: 0px 20px;
//     `,
//     Alarm: styled.img`
//       width: 16px;
//       height: 16px;
//       margin-right: 11px;
//     `,
//     Settings: styled.img`
//       width: 16px;
//       height: 16px;
//       margin-right: 20px;
//     `,
//   };
//
//   const Banner = {
//     MainImg: styled.div`
//       width: 100%;
//       height: 100%;
//       background-image: url(${MainSample});
//       background-repeat: no-repeat;
//       background-size: cover;
//       margin-bottom: 25px;
//     `,
//     TextWrap: styled.div`
//       display: flex;
//       flex-direction: column;
//       justify-content: flex-end;
//       margin-bottom: 20px;
//     `,
//     WhiteArea: styled.div`
//       width: 335px;
//       height: 63px;
//       background-color: ${COLORS.White};
//       border-radius: 100px;
//       text-align: center;
//       align-items: center;
//       justify-content: center;
//       display: flex;
//     `,
//     BannerWrap: styled.div`
//       display: flex;
//       height: 375px;
//       justify-content: center;
//     `,
//
//     MainText: styled.div`
//       color: ${COLORS.White};
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       text-align: center;
//       ${FONT_STYLES.B_14}
//       margin-bottom: 14px;
//     `,
//     SubTextWrap: styled.div`
//       display: flex;
//       justify-content: center;
//       margin-bottom: 20px;
//     `,
//     SubTextWrap2: styled.div`
//       display: flex;
//       flex-direction: column;
//       justify-content: center;
//       align-items: center;
//     `,
//     SubText: styled.div`
//       display: flex;
//       justify-content: center;
//       color: ${COLORS.White};
//       ${FONT_STYLES.R_11}
//       margin-bottom: 8px;
//     `,
//     SubNumber: styled.div`
//       justify-content: center;
//       color: ${COLORS.White};
//       ${FONT_STYLES.B_12}
//     `,
//     Division: styled.img`
//       width: 0.5px;
//       height: 31px;
//       margin: 0px 62.25px;
//     `,
//     DivisionGray: styled.img`
//       width: 0.5px;
//       height: 31px;
//       margin: 0px 16.5px;
//     `,
//     Clock: styled.img`
//       width: 10.42;
//       height: 9.71px;
//       margin-right: 3px;
//     `,
//     Time: styled.div`
//       ${FONT_STYLES.M_11}
//       margin-right: 16px;
//     `,
//     Temperature: styled.div`
//       ${FONT_STYLES.B_20}
//     `,
//   };
//
//   const Component = {
//     Margin: styled.div`
//       margin: 0px 20px;
//     `,
//   };
//
//   const Category = {
//     TitleTxt: styled.div`
//       ${FONT_STYLES.B_16}
//     `,
//     MoreTxt: styled.div`
//       ${FONT_STYLES.R_11}
//     `,
//     Header: styled.div`
//       display: flex;
//       justify-content: space-between;
//       margin-bottom: 12px;
//     `,
//   }
//
//   const ImgSwiper = {
//     Wrap: styled.div`
//       height: 156px;
//     `,
//     Card: styled.img`
//       // width: 108px;
//       height: 144px;
//     `,
//   }
//
//
// function Home() {
//   return (
//     <div>
//       <Styled.System />
//       <Styled.Header>
//         <Styled.LeftWrap>
//           <Icon.Location src={IcLocation} />
//           <Styled.LocationTxt>Dongjak-gu, Sangdo-dong</Styled.LocationTxt>
//         </Styled.LeftWrap>
//
//         <Styled.RightIconWrap>
//           <Icon.Alarm src={IcAlarm} />
//           <Icon.Settings src={IcSettings} />
//         </Styled.RightIconWrap>
//       </Styled.Header>
//
//       <Banner.MainImg>
//         <Banner.BannerWrap>
//           <Banner.TextWrap>
//             <Banner.MainText>Now</Banner.MainText>
//             <Banner.MainText style={{fontSize: 32}}>28°C</Banner.MainText>
//
//             <Banner.SubTextWrap>
//               <Banner.SubTextWrap2>
//                 <Banner.SubText>Humidity</Banner.SubText>
//                 <Banner.SubNumber>50%</Banner.SubNumber>
//               </Banner.SubTextWrap2>
//
//               <Banner.Division src={IcDivision}/>
//
//               <Banner.SubTextWrap2>
//                 <Banner.SubText>Weather</Banner.SubText>
//                 <Banner.SubNumber>Cloudy</Banner.SubNumber>
//               </Banner.SubTextWrap2>
//             </Banner.SubTextWrap>
//
//             <Banner.WhiteArea>
//               <Banner.Clock src={IcClock} />
//               <Banner.Time>12 PM</Banner.Time>
//               <Banner.Temperature>10°C</Banner.Temperature>
//               <Banner.DivisionGray src={IcDivisionGray} />
//               <Banner.Clock src={IcClock} />
//               <Banner.Time>7 PM</Banner.Time>
//               <Banner.Temperature>13°C</Banner.Temperature>
//             </Banner.WhiteArea>
//           </Banner.TextWrap>
//         </Banner.BannerWrap>
//       </Banner.MainImg>
//
//       <Component.Margin>
//         <Category.Header>
//           <Category.TitleTxt>Top</Category.TitleTxt>
//           <Category.MoreTxt>More</Category.MoreTxt>
//         </Category.Header>
//
//         <ImgSwiper.Wrap>
//           <Swiper
//           slidesPerView={3}
//           spaceBetween={5}
//           modules={[Pagination, FreeMode]}
//           centeredSlides
//           freeMode
//           loop
//           >
//           {images.map((v) => (
//               <SwiperSlide><ImgSwiper.Card src={v}/></SwiperSlide>
//           ))}
//         </Swiper>
//       </ImgSwiper.Wrap>
//
//       <Category.Header>
//           <Category.TitleTxt>Outer</Category.TitleTxt>
//           <Category.MoreTxt>More</Category.MoreTxt>
//         </Category.Header>
//
//         <ImgSwiper.Wrap>
//           <Swiper
//           slidesPerView={3}
//           spaceBetween={5}
//           modules={[Pagination, FreeMode]}
//           centeredSlides
//           freeMode
//           loop
//           >
//           {images.map((v) => (
//               <SwiperSlide><ImgSwiper.Card src={v}/></SwiperSlide>
//           ))}
//         </Swiper>
//       </ImgSwiper.Wrap>
//     </Component.Margin>
//     </div>
//   )
// }
//
// export default Home
