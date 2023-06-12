'use strict';

function timestampToDate( timestamp ) {
  let date = new Date(timestamp * 1000),
      day = leadingZero(date.getDate()),
      month = leadingZero(date.getMonth() + 1),
      hours = leadingZero(date.getHours()),
      minutes = leadingZero(date.getMinutes());

  return day + '-' + month + ' ' + hours + ':' + minutes;
}

function leadingZero( num ) {
  return (num < 10 ? '0'+num : num);
}
