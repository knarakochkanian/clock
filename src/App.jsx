import React, {useEffect, useState} from 'react';
import './App.css';
import Clock from './components/Clock';


export default  function App () {

    const [secondRatio, setSecondRatio] = useState(0)
    const [minuteRatio, setMinuteRatio] = useState(0)
    const [hourRatio, setHourRatio] = useState(0)

    useEffect(() => {
        setInterval(() => {
            setClock()
        }, 1000);
    },[])

    const setClock = () =>{
        const currentDate = new Date;
        setSecondRatio(currentDate.getSeconds() / 60);
        setMinuteRatio((secondRatio + currentDate.getMinutes()) / 60) ;
        setHourRatio((minuteRatio + currentDate.getHours()) / 12);
    }

    return (
        <div>
          <Clock secondRatio={secondRatio} minuteRatio={minuteRatio} hourRatio={hourRatio} />
        </div>
    );
}
