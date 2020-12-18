import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const updateClock = () => {
    // console.log('---------------------');
    var now = new Date();
    var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr: any = now.getFullYear(),
      hou = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";

    if (hou >= 12) {
      pe = "PM";
    }
    if (hou == 0) {
      hou = 12;
    }
    if (hou > 12) {
      hou = hou - 12;
    }

    const pad = (num: number, size: number): string => {
      let s = num + "";
      while (s.length < size) s = "0" + s;
      return s;
    }

    var months = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "October", "November", "December"];
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    console.log([week[dname], months[mo], pad(dnum, 2), yr, pad(hou, 2), pad(min, 2), pad(sec, 2), pe]);

    setDname(week[dname]);
    setMonth(months[mo]);
    setDay(pad(dnum, 2));
    setYear(yr);

    setHour(pad(hou, 2));
    setMinute(pad(min, 2));
    setSecond(pad(sec, 2));
    setPe(pe);

    return [week[dname], months[mo], pad(dnum, 2), yr, pad(hou, 2), pad(min, 2), pad(sec, 2), pe];
  }

  useEffect(() => {
    updateClock();
    setInterval(() => updateClock(), 500);
  }, []);

  const [dname, setDname] = useState('');
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [hour, setHour] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  const [pe, setPe] = useState('');

  return (
    <div className="App">
      {/* <!--digital clock start--> */}
      <div className="datetime">
        <div className="date">
          <span id="dayname">{dname + ', '}</span>
          <span id="month">{month + ', '}</span>
          <span id="daynum">{day + ', '}</span>
          <span id="year">{year}</span>
        </div>
        <div className="time">
          <span id="hour">{hour}</span>:
          <span id="minutes">{minute}</span>:
          <span id="seconds">{second}</span>
          <span id="period">{pe}</span>
        </div>
      </div>
      {/* <!--digital clock end--> */}
    </div>
  );
}

export default App;
