import React, {useState, FC, useRef, useCallback, useEffect} from 'react'
import classnames from 'classnames';
import { useNavigate } from 'react-router-dom'
import {Header, SettingTitle, SliderWrap,SliderBar,FooterWrap} from "../styles/TimeStyle";
import backBtn from '../assets/icons/back-icon.png'

interface MultiRangeSliderProps {
    min: number;
    max: number;
    onChange: any;
}

function SettingTime({min,max,onChange}:MultiRangeSliderProps){
    const navigate = useNavigate()
    const onClickHandle = () => {
        navigate('/setting/location');
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

export default SettingTime;