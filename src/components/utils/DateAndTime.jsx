import React from 'react'

const DateAndTime = () => {
    var showDate = new Date();
    // var todayDate = showDate.getDate() + '/' +(showDate.getMonth() + 1) + '/' + showDate.getFullYear();
    var displayDate = showDate.toDateString();
    var displayTime = showDate.getHours() +':'+showDate.getMinutes();
    return (
        <div>
            {displayDate} {displayTime}
        </div>
  );
}

export default DateAndTime