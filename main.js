const countDown = () =>{
    
    const countDate = new Date("November 29, 2021 00:00:00 GMT+7").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;


    const textDay = Math.floor(gap/day);
    const day1 = Math.floor((textDay / 10));
    const day2 = Math.floor((textDay % 10));

    const textHour = Math.floor((gap % day) / hour);
    const hour1 = Math.floor((textHour / 10));
    const hour2 = Math.floor((textHour % 10));
    
    const textMinute = Math.floor((gap % hour) / minute);
    const min1 = Math.floor((textMinute / 10));
    const min2 = Math.floor((textMinute % 10));

    const textSecond = Math.floor((gap % minute) / second);
    const sec1 = Math.floor((textSecond / 10));
    const sec2 = Math.floor((textSecond % 10));


    document.getElementById('day1').innerText = day1;
    document.getElementById('day2').innerText = day2;
    document.getElementById('hour1').innerText = hour1;
    document.getElementById('hour2').innerText = hour2;
    document.getElementById('min1').innerText = min1;
    document.getElementById('min2').innerText = min2;
    document.getElementById('sec1').innerText = sec1;
    document.getElementById('sec2').innerText = sec2;

};
setInterval(countDown, 1000);