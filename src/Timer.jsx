import React, { useEffect } from 'react'
import { useState } from 'react'
import Lap from './Lap'
import './Timer.css'

const Timer = () => {
    const [miliSec, setMiliSec] = useState(0);
    const [sec, setSec] = useState(0);
    const [min, setMin] = useState(0);
    const [hour, setHour] = useState(0);
    const [laps, setLaps] = useState([]);
    const [isRunning, setIsRunning] = useState(false);

    const formatWithLeadingZero = (number) => {
        if(number<10) {
            number = number + "0"
        }
        else{
            number = number.toString();
        }
    }

    useEffect(() => {
        let interval;

        if(isRunning) {
            interval = setInterval(() => {
                setMiliSec((miliSec) => {
                    if(miliSec>=99){
                        setSec((sec) => {
                            if(sec>=59){
                                setMin((min) => {
                                    if(min>=59){
                                        setHour((prevHour) => prevHour+1);
                                        return 0;
                                    }else {
                                        return minutes+1;
                                    }
                                })
                                return 0;
                            }else{
                                return sec+1;
                            }
                        })
                        return 0;
                    }else{
                        return miliSec + 1;
                    }

                })
            }, 10);
        }
        return () => clearInterval(interval);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    }

    const handlePause = () => {
        setIsRunning(false);
    }

    const handleLap = () => {
        const lapTime = 
            formatWithLeadingZero(hour)+":"+
            formatWithLeadingZero(min)+":"+
            formatWithLeadingZero(sec)+":"+
            formatWithLeadingZero(miliSec);
        setLaps((prevLaps) => [...prevLaps, lapTime]);
    }

    const handleReset = () => {
        setIsRunning(false);
        setMiliSec(0);
        setSec(0);
        setMin(0);
        setHour(0);
        setLaps([]);
    }

  return (
    <div className='container'>
        <div className='timeDisplay'>
            {formatWithLeadingZero(hour)} : {formatWithLeadingZero(min)}:{" "}
            {formatWithLeadingZero(sec)} : {formatWithLeadingZero(miliSec)}
        </div>
        <div className='buttons'>
            <button 
            className='btn'
            onClick={handleStart}
            disabled={isRunning}
            style={{cursor: isRunning ? "not=allowed" : "pointer"}}
            >
                Start
            </button>
            <button className='btn' onClick={handlePause}>
                Pause
            </button>
            <button className='btn' onClick={handleLap}>
                Lap
            </button>
            <button className='btn' onClick={handleReset}>
                Reset
            </button>
        </div>
        <Lap laps={laps}/>
    </div>
  )
}

export default Timer
