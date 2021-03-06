const meetingRoomRouter = require('./meetingRoom');
const foodRouter = require('./food');
const suppliesRouter = require('./supplies');
const meetingRouter = require('./meeting');
const authRouter = require('./auth');
const userRouter = require('./user');
const resetRouter = require('./reset');
const officeRouter = require('./office');

const setupRoutes = (app) => {
  app.use('/auth', authRouter);
  app.use('/meetingRoom', meetingRoomRouter);
  app.use('/food', foodRouter);
  app.use('/supplies', suppliesRouter);
  app.use('/meeting', meetingRouter);
  app.use('/user', userRouter);
  app.use('/reset', resetRouter);
  app.use('/office', officeRouter);
};

module.exports = {
  setupRoutes,
};
