function digitalClock(){

    let now = new Date();

    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();

    hour = hour < 10 ? "0"+hour : hour;
    minute = minute < 10 ? "0"+minute : minute;
    second = second < 10 ? "0"+second : second;

    document.getElementById("time").innerHTML =
    hour + ":" + minute + ":" + second;

    let today = now.toDateString();

    document.getElementById("date").innerHTML = today;

}

setInterval(digitalClock,1000);

digitalClock();
