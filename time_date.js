var today = new Date();
var day = today.getDay();
var listday = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
console.log("Today is : " +listday[day]);
var hour = today.getHours();
var minute = today.getMinutes();
var prepand = (hour>=12) ? "PM" : "AM";

if (hour>=12) {
    hour = hour - 12
}else if (hour === 0){
    hour = 12
}

var timeLabel = (hour === 12) ? (prepand === "PM" ? "Noon" : Midnight) : (hour + prepand);

console.log("Hour  " + hour + prepand+":" + minute);