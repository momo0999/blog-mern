import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ msg: 'Hello There' });
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`
  )
);
