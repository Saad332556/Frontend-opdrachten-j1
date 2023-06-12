'use strict';

function timestampToDate( timestamp, type ) {
  let date = new Date(timestamp * 1000);

  const days = ['Ma', 'Di', 'Wo', 'Do', 'Vr', 'Za', 'Zo'];
  const months = ['Jan', 'Feb', 'Maa', 'Apr', 'Mei', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec'];

  if (type == 'hourly') return leadingZero(date.getHours()) + ':' + leadingZero(date.getMinutes());
  if (type == 'daily') return days[date.getDay()-1] + ' ' + leadingZero(date.getDate()) + ' ' + months[date.getMonth()];
  if (type == 'update') return timestampToDate(timestamp, 'daily') + ' @ ' + timestampToDate(timestamp, 'hourly');
}

function leadingZero( num ) {
  return (num < 10 ? '0'+num : num);
}
