const date1 = new Date();

const date2 = new Date(date1);

date1;
date2;

console.log(date1 === date2)

const dateStr = date2.toString();
dateStr;

const date3 = new Date(dateStr);
date3;

const date4 = new Date(2000, 1, 27, 05, 30, 33, 1000);
date4

const day = date4.getDay();
day;
const date = date4.getDate();
date;
const year = date4.getFullYear();
year;
const month = date4.getMonth();
month;
const msecs = date4.getMilliseconds();
msecs;
const secs = date4.getSeconds();
secs;

const date5 = new Date();
date5;

const firstDayOfNextMonth = new Date(date5.getFullYear(), date5.getMonth() + 1, 1);
firstDayOfNextMonth;

firstDayOfNextMonth.setDate(firstDayOfNextMonth.getDate() - 1)
firstDayOfNextMonth;

const lastDayOfThisMonth = firstDayOfNextMonth.getDate();
lastDayOfThisMonth;



const date6 = new Date(Date.UTC(2020, 11, 5, 3, 23, 16, 738));

const formattedDate = new Intl.DateTimeFormat().format(date6);
formattedDate;
console.log(typeof formattedDate)


const formattedDate2 = new Intl.DateTimeFormat(['ban', 'id']).format(date6);
formattedDate2;


const formattedDate3 = new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long', timeZone: 'Australia/Sydney' }).format(date6);
formattedDate3;

const YYYY = date6.getFullYear();
const MM = date6.getMonth();
const DD = date6.getDate();
const HH = date6.getHours();
const mm = date6.getMinutes();
const SS = date6.getSeconds();

const formated = `${YYYY} ${MM} ${DD} ${HH} ${mm} ${SS}`;
formated;