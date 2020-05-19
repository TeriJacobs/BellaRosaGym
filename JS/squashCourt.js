// //DISPLAYING THE HEADER DATE, DAY AND MONTH
var d = new Date();

var day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
    
];

var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "November",
    "December"
];


document.getElementById("demoMonth").innerHTML =  months[d.getMonth()];
document.getElementById("demoDay").innerHTML =  day[d.getDay()] + " the " + d.getDate() + " " + "of" + " " + months[d.getMonth()];

// //https://www.youtube.com/watch?v=YC9NN3mmD9E - last video watched


// //references: https://www.sitepoint.com/community/t/display-message-with-the-condition-day-of-week/243402
// //DISPLAYING THE DAYS OF THE WEK TO HET THE DATE BY HIGHLIGHTING IT IN GREEM
var now  = new Date();

var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var days = weekday[now.getDay()];

for (var i = 0 ; i < 6; i++) {
  console.log([i]);
}


if (days === "Sunday"){
  console.log("<h2>Sunday</h2>");
}else if(days === "Monday"){
  document.getElementById("monday").style.backgroundColor = '#99C262';
}else if( days === "Tuesday"){
  document.getElementById("tuesday").style.backgroundColor = '#99C262';
}else if( days === "Wednesday"){
  document.getElementById("wednesday").style.backgroundColor = '#99C262';
}else if( days === "Thursday"){
  document.getElementById("thursday").style.backgroundColor = '#99C262';
}else if( days === "Friday"){
  document.getElementById("friday").style.backgroundColor = '#99C262';
}else if( days === "Saturday"){
  document.getElementById("saturday").style.backgroundColor = '#99C262';
}else{
  console.log("<h2>A DAY</h2");
}

// DISPLAYING THE DATES WITHIN THE <TH> of THE WEEKDAYS
var curr = new Date();
curr.setDate(17); //9th day of the month
curr.setMonth(4); // May - years are numbered 0-11
curr.setFullYear(2020); // the year

var monday = new Date(curr.setDate(curr.getDate() - curr.getDay()+1));
var tuesday = new Date(curr.setDate(curr.getDate() - curr.getDay()+2));
var wednesday = new Date(curr.setDate(curr.getDate() - curr.getDay()+3));
var thursday = new Date(curr.setDate(curr.getDate() - curr.getDay()+4));
var friday = new Date(curr.setDate(curr.getDate() - curr.getDay()+5));
var saturday = new Date(curr.setDate(curr.getDate() - curr.getDay()+6));
var sunday = new Date(curr.setDate(curr.getDate() - curr.getDay()+7));

console.log(monday, tuesday, wednesday,thursday,friday,saturday,sunday);

document.getElementById("mon").innerHTML = monday.getDate();
document.getElementById("tue").innerHTML = tuesday.getDate();
document.getElementById("wed").innerHTML = wednesday.getDate();
document.getElementById("thu").innerHTML = thursday.getDate();
document.getElementById("fri").innerHTML = friday.getDate();
document.getElementById("sat").innerHTML = saturday.getDate();
document.getElementById("sun").innerHTML = sunday.getDate();