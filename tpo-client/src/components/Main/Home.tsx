import React, { useState } from 'react';
import styled from 'styled-components';
import COLORS from '../../styles/colors'
import FONT_STYLES from '../../styles/font-style';

import IcAlarm from '../../assets/ic-alarm.png';
import ICSettings from '../../assets/ic-settings.png';

const Styled = {
  wrap: styled.div`
    width: 400px;
    height: 400px;
    background-color: red;
  `,

}

function Home() {
  return (
    <Styled.wrap>Home</Styled.wrap>
  )
}

export default Home
// export {}