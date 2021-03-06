const moment = require('moment');

const dayDate = new Date();
const beginningsMeeting = [];
const beginningsOffice = [];
// Meeting for Room 1 and 2
// d+1

dayDate.setDate(dayDate.getDate() + 1);
beginningsMeeting.push(
  moment(dayDate.setHours(8, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(9, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(10, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(14, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(15, 0, 0)).format('YYYY-MM-DD HH:mm:ss')
);
beginningsOffice.push(
  moment(dayDate.setHours(8, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(14, 0, 0)).format('YYYY-MM-DD HH:mm:ss')
);

// d+2

dayDate.setDate(dayDate.getDate() + 1);
beginningsMeeting.push(
  moment(dayDate.setHours(9, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(11, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(15, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(16, 0, 0)).format('YYYY-MM-DD HH:mm:ss')
);

beginningsOffice.push(
  moment(dayDate.setHours(8, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(14, 0, 0)).format('YYYY-MM-DD HH:mm:ss')
);
// d+3

dayDate.setDate(dayDate.getDate() + 1);
beginningsMeeting.push(
  moment(dayDate.setHours(10, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(14, 0, 0)).format('YYYY-MM-DD HH:mm:ss')
);
beginningsOffice.push(
  moment(dayDate.setHours(8, 0, 0)).format('YYYY-MM-DD HH:mm:ss'),
  moment(dayDate.setHours(14, 0, 0)).format('YYYY-MM-DD HH:mm:ss')
);

// beginnings --> beginning,userId,meetingRoom
const resOffice = [
  [beginningsOffice[1], 1, 2],
  [beginningsOffice[2], 1, 5],
  [beginningsOffice[3], 2, 1],
  [beginningsOffice[2], 2, 4],
  [beginningsOffice[4], 2, 1],
  [beginningsOffice[0], 3, 1],
  [beginningsOffice[5], 3, 4],
  [beginningsOffice[0], 4, 6],
  [beginningsOffice[2], 5, 1],
  [beginningsOffice[1], 5, 4],
  [beginningsOffice[0], 6, 5],
  [beginningsOffice[2], 6, 2],
  [beginningsOffice[0], 7, 2],
  [beginningsOffice[4], 7, 2],
];
const meetings = [
  [beginningsMeeting[0], 2, 1],
  [beginningsMeeting[1], 3, 1],
  [beginningsMeeting[2], 6, 1],
  [beginningsMeeting[4], 5, 1],
  [beginningsMeeting[6], 4, 1],
  [beginningsMeeting[8], 1, 1],
  [beginningsMeeting[9], 2, 1],
  [beginningsMeeting[0], 4, 2],
  [beginningsMeeting[3], 4, 2],
  [beginningsMeeting[4], 5, 2],
  [beginningsMeeting[5], 6, 2],
  [beginningsMeeting[7], 5, 3],
  [beginningsMeeting[10], 2, 3],
  [beginningsMeeting[7], 7, 2],
  [beginningsMeeting[10], 7, 2],
];

const participants = [
  [1, 1, 'pr??sentiel'],
  [3, 1, 'distenciel'],
  [4, 1, 'distanciel'],
  [5, 1, 'pr??sentiel'],
  [7, 1, 'distenciel'],
  [6, 1, 'pr??sentiel'],
  [1, 2, 'distanciel'],
  [2, 2, 'pr??sentiel'],
  [1, 3, 'pr??sentiel'],
  [3, 3, 'distenciel'],
  [4, 3, 'distanciel'],
  [5, 3, 'pr??sentiel'],
  [6, 3, 'pr??sentiel'],
  [1, 4, 'distanciel'],
  [2, 4, 'pr??sentiel'],
  [6, 4, 'distanciel'],
  [3, 4, 'pr??sentiel'],
  [3, 5, 'distenciel'],
  [1, 5, 'distanciel'],
  [7, 5, 'pr??sentiel'],
  [6, 6, 'pr??sentiel'],
  [5, 6, 'distanciel'],
  [4, 6, 'pr??sentiel'],
  [3, 6, 'distanciel'],
  [2, 6, 'pr??sentiel'],
  [6, 7, 'pr??sentiel'],
  [4, 7, 'pr??sentiel'],
  [5, 7, 'distanciel'],
  [1, 8, 'pr??sentiel'],
  [3, 8, 'distanciel'],
  [2, 8, 'pr??sentiel'],
  [6, 9, 'pr??sentiel'],
  [5, 9, 'distanciel'],
  [1, 10, 'pr??sentiel'],
  [3, 10, 'distanciel'],
  [2, 10, 'pr??sentiel'],
  [2, 11, 'pr??sentiel'],
  [5, 11, 'distanciel'],
  [1, 11, 'pr??sentiel'],
  [3, 12, 'distanciel'],
  [2, 12, 'pr??sentiel'],
  [5, 13, 'distanciel'],
  [1, 13, 'pr??sentiel'],
  [3, 13, 'distanciel'],
  [4, 13, 'pr??sentiel'],
  [4, 14, 'distanciel'],
  [5, 14, 'pr??sentiel'],
  [2, 15, 'distanciel'],
  [6, 15, 'pr??sentiel'],
];

module.exports = { meetings, participants, resOffice };
