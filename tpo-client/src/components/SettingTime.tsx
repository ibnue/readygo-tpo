import React, {useState, FC, useRef, useCallback, useEffect} from 'react'
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom'
import styled from "styled-components"
import backBtn from '../assets/icons/back-icon.png'




interface MultiRangeSliderProps {
    min: number;
    max: number;
    onChange: any;
}


function SettingTime({min,max,onChange}:MultiRangeSliderProps){
    const navigate = useNavigate()
    const onClickHandle = () => {
        navigate('/setting_location');
    }
    const [minVal, setMinVal] = useState(min);
    const [maxVal, setMaxVal] = useState(max);
    const minValRef = useRef<HTMLInputElement>(null);
    const maxValRef = useRef<HTMLInputElement>(null);
    const range = useRef<HTMLDivElement>(null);

    // Convert to percentage
    const getPercent = useCallback(
        (value: number) => Math.round(((value - min) / (max - min)) * 100),
        [min, max]
    );

    // Set width of the range to decrease from the left side
    useEffect(() => {
        if (maxValRef.current) {
            const minPercent = getPercent(minVal);
            const maxPercent = getPercent(+maxValRef.current.value); // Precede with '+' to convert the value from type string to type number

            if (range.current) {
                range.current.style.left = `${minPercent}%`;
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [minVal, getPercent]);

    // Set width of the range to decrease from the right side
    useEffect(() => {
        if (minValRef.current) {
            const minPercent = getPercent(+minValRef.current.value);
            const maxPercent = getPercent(maxVal);

            if (range.current) {
                range.current.style.width = `${maxPercent - minPercent}%`;
            }
        }
    }, [maxVal, getPercent]);

    // Get min and max values when their state changes
    useEffect(() => {
        onChange({ min: minVal, max: maxVal });
    }, [minVal, maxVal, onChange]);

    // const [minVal, setMinVal] = useState(min);
    // const [maxVal, setMaxVal] = useState(max);
    // const minValRef = useRef(min);
    // const maxValRef = useRef(max);
    // const range = useRef<HTMLDivElement>(null);
    //
    // // Convert to percentage
    // const getPercent = useCallback(
    //     (value: number) => Math.round(((value - min) / (max - min)) * 100),
    //     [min, max]
    // );
    //
    // // Set width of the range to decrease from the left side
    // useEffect(() => {
    //     const minPercent = getPercent(minVal);
    //     const maxPercent = getPercent(maxValRef.current);
    //
    //     if (range.current) {
    //         range.current.style.left = `${minPercent}%`;
    //         range.current.style.width = `${maxPercent - minPercent}%`;
    //     }
    // }, [minVal, getPercent]);
    //
    // // Set width of the range to decrease from the right side
    // useEffect(() => {
    //     const minPercent = getPercent(minValRef.current);
    //     const maxPercent = getPercent(maxVal);
    //
    //     if (range.current) {
    //         range.current.style.width = `${maxPercent - minPercent}%`;
    //     }
    // }, [maxVal, getPercent]);



    return (
        <div>
            <Header>
                <img src={backBtn} alt='backButton' onClick={() => {
                    navigate(-1)
                }} onKeyDown={onClickHandle}/>
                <span>User Setting</span>
            </Header>
            <SettingTitle>
                <span>Time</span>
                <span>3/4</span>
            </SettingTitle>
            <SliderWrap>
                <SliderBar>
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={minVal}
                        ref={minValRef}
                        onChange={(event) => {
                            const value = Math.min(+event.target.value, maxVal - 1);
                            setMinVal(value);
                            event.target.value = value.toString();
                            // minValRef.current = value;
                        }}
                        className={classnames("thumb thumb-zindex-3", {
                            "thumb-zindex-5":minVal > max - 100
                        })}
                        style={{zIndex:'5'}}
                    />
                    <input
                        type="range"
                        min={min}
                        max={max}
                        value={maxVal}
                        ref={maxValRef}
                        onChange={(event) => {
                            const value = Math.max(+event.target.value, minVal + 1);
                            setMaxVal(value);
                            event.target.value = value.toString();
                            // maxValRef.current = value;
                        }}
                        className="thumb thumb-zindex-4"
                    />
                    <div className='slider'>
                        <div className='slider-track'/>
                        <div ref={range} className='slider-range'/>
                        <div className='slider-left-value'>{minVal}:00</div>
                        <div className='slider-right-value'>{maxVal}:00</div>
                    </div>
                </SliderBar>
                <FooterWrap onClick={onClickHandle}>
                    <div>Next</div>
                </FooterWrap>
            </SliderWrap>
        </div>
    )
}

const Header = styled.header`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  height: 52px;

  span {
    position: relative;
    top: 13px;
  }
;

  img {
    width: 8px;
    cursor: pointer;
    position: relative;
    right: 94px;
    top: 13px;
  }
`;


const SettingTitle = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 140px;

  span {
    font-size: 12px;
  }
`;

const SliderWrap = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  margin: 20px;
`;

const SliderBar = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  
  .slider {
    position: relative;
    width: 200px;
  }
  
  .slider-track,
  .slider-range,
  .slider-left-value,
  .slider-right-value {
    position: absolute;
  }
  
  .slider-track,
  .slider-range{
    border-radius: 3px;
    height: 5px;
    margin-top: 1px;
  }
  
  .slider-track {
    background-color: #C3C4C5; // 빈색
    width: 100%;
    z-index: 1;
  }
  
  .slider-range {
    background-color: #3A3F45;//#3A3F45; // 버튼 사이 색
    z-index: 2;
  }
  
  .slider-left-value,
  .slider-right-value {
    font-size: 16px;
  }
  
  .slider-left-value {
    left: -40px;
    bottom: -14px;
  }
  
  .slider-right-value{
    right: -44px;
    bottom: -14px;
  }
  
  .thumb,
  .thumb::-webkit-slider-thumb {
    -webkit-appearance: none;
    -webkit-tap-highlight-color: transparent;
  }
  
  .thumb {
    pointer-events: none;
    position: absolute;
    height: 0;
    width: 200px;
    outline: none;
  }
  
  .thumb-zindex-3 {
    z-index:3;
  }
  
  .thumb-zindex-4 {
    z-index: 4;
  }
  
  .thumb-zindex-5{
    z-index: 5;
  }
  
  .thumb::-webkit-slider-thumb {
      background-color:#3A3F45; // 버튼 색깔 
      border: none;
      border-radius: 50%;
      cursor: pointer;
      height: 18px;
      width: 18px;
      margin-top: 4px;
      pointer-events: all;
      position: relative;
  }
`;

const FooterWrap = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #3A3F45;
  border-radius: 100px;
  width: 80%;
  height: 52px;
  position: fixed;
  bottom: 40px;
  cursor: pointer;

  div {
    position: relative;
    font-size: 18px;
    color: white;
    top: 16px;
  }
`;



export default SettingTime;