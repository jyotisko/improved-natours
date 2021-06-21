const mongoose = require('mongoose');
const dotenv = require('dotenv');

process.on('uncaughtException', err => {
  // console.log(err);
  console.log(err.name, err.message);
  console.log(error);
  console.log('UNCAUGHT EXCEPTION 💥. Shutting down...');
  process.exit(1);
});

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.PASSWORD); // Connection string
mongoose.connect(DB, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
}).then(() => console.log('DB connection sucessful!'));

const port = process.env.PORT || 3000;
const server = app.listen(port, () => console.log(`App running on port ${port}...`));

process.on('unhandledRejection', err => {
  console.log(err);
  console.log(err.name, err.message);
  console.log('UNHANDLED REJECTION 💥. Shutting down...');
  server.close(() => process.exit(1));
});

process.on('SIGTERM', () => {
  console.log('😇 SIGTERM RECEIVED. Shutting down gracefully!');
  server.close(() => {
    console.log('😭 Process terminated by SIGTERM!');
  });
});
